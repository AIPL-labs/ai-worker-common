import P from "parsimmon";
import type { AiplAstSpec } from "./AiplAstSpec";
import { isDefined } from "@mjtdev/engine";

const addLoc = <T>(parser: P.Parser<T>) => {
  return parser
    .mark()
    .map(
      (mark) =>
        ({ ...mark.value, loc: { start: mark.start, end: mark.end } } as const)
    );
};

const identifierParser = P.regexp(/[a-zA-Z_][a-zA-Z0-9_.]+/).map(
  (value) =>
    ({
      type: "identifier",
      value,
    } as const)
);

const operatorParser = P.alt(
  P.string("&&"),
  P.string("&"),
  P.string("||"),
  P.string("|"),

  P.string(">"),
  P.string("<"),
  P.string("="),
  P.string("=="),
  P.string("!="),
  P.string("!==")
).map(
  (value) =>
    ({
      type: "operator",
      value,
    } as const)
);

const textParser = P.regexp(/[^{}()\\]+/).map(
  // const textParser = P.regexp(/[^{})]+/).map(
  // const textParser = P.regexp(/[^{}]+/).map(
  (value) =>
    ({
      type: "text",
      value,
    } as const)
);

const numberParser = P.regexp(/[0-9]+/)
  .map((value) => Number(value))
  .map((value) => ({ type: "number", value } as const));

const innerTemplateVariable = addLoc(identifierParser).chain((identifier) =>
  P.alt(
    P.string(":")
      .then(P.regexp(/[^}]+/))
      .map(
        (defaultValue) =>
          ({
            type: "templateVariable",
            identifier,
            defaultValue,
          } as const)
      ),
    P.succeed({
      type: "templateVariable",
      identifier,
      defaultText: undefined,
    } as const)
  )
);

const templateVariableParser = P.alt(
  P.seq(P.string("{"), innerTemplateVariable, P.string("}")),
  P.seq(P.string("{{"), innerTemplateVariable, P.string("}}"))
).map((value) => value[1]);

const commentParser = P.string("(#").then(
  P.regex(/[^)]+/)
    .skip(P.string(")"))
    .map(
      (value) =>
        ({
          type: "comment",
          value,
        } as const)
    )
);

export const createAiplLanguage = () => {
  return P.createLanguage<AiplAstSpec>({
    escapedSymbol: (r) =>
      addLoc(
        P.seq(P.string("\\"), P.alt(r.leftParen, r.rightParen)).map(
          (value) =>
            ({
              type: "escapedSymbol",
              value: value[1].value,
              // value: ")",
            } as const)
        )
      ),

    leftParen: () =>
      addLoc(
        // P.seq(P.lookahead(P.regex(/^[\\]/)), P.string("("))
        // P.seq(P.string("(")).map(
        P.string("(").map(() => ({ type: "symbol", value: "(" } as const))
      ),
    rightParen: () =>
      addLoc(
        // P.seq(P.lookahead(P.regex(/^[\\]/)), P.string(")"))
        // P.seq(P.string(")"))
        P.string(")").map(() => ({ type: "symbol", value: ")" } as const))
      ),
    text: () => addLoc(textParser),
    stringLiteral: (r) =>
      addLoc(
        P.alt(
          P.seq(P.string('"'), r.template, P.string('"')),
          P.seq(P.string("'"), r.template, P.string("'"))
        ).map(
          (value) =>
            ({
              type: "stringLiteral",
              value: value[1],
            } as const)
        )
      ),
    entry: (r) =>
      addLoc(
        P.seq(
          P.regex(/[a-zA-Z0-9-_.]+/),
          P.optWhitespace,
          P.alt(P.string(":"), P.string("=")),
          P.optWhitespace,
          r.stringLiteral
        ).map(
          (value) =>
            ({
              type: "entry",
              key: value[0],
              op: value[2],
              value: value[4],
            } as const)
        )
      ),
    list: (r) =>
      addLoc(
        P.seq(
          // P.string("("),
          r.leftParen,
          P.optWhitespace,
          P.seq(
            P.optWhitespace,
            r.entry,
            P.optWhitespace,
            P.alt(P.string(","), P.succeed(undefined)),
            P.optWhitespace
          )
            .map((v) => v[1])
            .many()
            .map(
              (values) =>
                ({
                  type: "list",
                  values: values,
                } as const)
            ),
          P.optWhitespace,
          r.rightParen
          // P.string(")")
        ).map((value) => value[2])
      ),
    urlFunction: (r) =>
      addLoc(
        P.seq(r.url, P.optWhitespace, P.alt(r.list, P.succeed(undefined))).map(
          (value) =>
            ({
              type: "urlFunction",
              url: value[0],
              args: value[2],
            } as const)
        )
      ),
    url: () =>
      addLoc(
        P.seq(
          P.alt(P.string("https"), P.string("http")),
          P.string("://"),
          P.regex(/[a-zA-Z0-9.-]+/),
          P.alt(P.regex(/\/[a-zA-Z0-9/j._-]*/), P.succeed(undefined)),
          P.alt(P.regex(/\?[a-zA-Z0-9%&=_.\-+]*/), P.succeed(undefined))
          // P.alt(P.regex(/\/[a-zA-Z0-9\/j._-]*/), P.succeed(undefined)),
          // P.alt(P.regex(/\?[a-zA-Z0-9%&=_\.\-\+]*/), P.succeed(undefined))
        ).map(
          (value) =>
            ({
              type: "url",
              scheme: value[0],
              host: value[2],
              path: value[3],
              query: value[4],
            } as const)
        )
      ),
    number: () => addLoc(numberParser),
    template: (r) =>
      addLoc(
        P.alt(r.templateVariable, P.regex(/[^{}"]+/))
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    identifier: () => addLoc(identifierParser),
    operator: () => addLoc(operatorParser),
    comment: () => addLoc(commentParser),
    templateVariable: () => addLoc(templateVariableParser),
    assignment: (r) =>
      addLoc(
        P.seq(
          // P.string("("),
          r.leftParen,
          P.optWhitespace,
          P.alt(r.stringLiteral, r.urlFunction),
          P.optWhitespace,
          P.string("->"),
          P.optWhitespace,
          r.identifier,
          P.optWhitespace,

          // P.string(")")
          r.rightParen
        ).map(
          (value) =>
            ({
              type: "assignment",
              question: value[2],
              identifier: value[6],
            } as const)
        )
      ),

    binaryExpr: (r) =>
      addLoc(
        P.seq(
          // P.string("("),
          r.leftParen,
          P.optWhitespace,
          P.alt(r.expr, r.identifier, r.number, r.unaryExpr),
          P.optWhitespace,
          r.operator,
          P.optWhitespace,
          P.alt(r.expr, r.identifier, r.number, r.unaryExpr),
          P.optWhitespace,
          // P.string(")")
          r.rightParen
        ).map(
          (result) =>
            ({
              type: "binaryExpr",
              left: result[2],
              op: result[4],
              right: result[6],
            } as const)
        )
      ),

    expr: (r) =>
      addLoc(
        P.alt(
          r.binaryExpr,
          r.stringLiteral,
          r.unaryExpr,
          r.identifier,
          r.number
        ).map((value) => ({
          type: "expr",
          value,
        }))
      ),
    unaryExpr: (r) =>
      addLoc(
        P.seq(P.string("!"), r.expr).map(
          (value) =>
            ({ type: "unaryExpr", op: value[0], operand: value[1] } as const)
        )
      ),

    code: (r) =>
      addLoc(
        P.seq(
          // P.string("("),
          r.leftParen,

          P.alt(r.expr),
          r.program,
          r.rightParen

          // P.string(")")
        ).map(
          (value) =>
            ({
              type: "code",
              condition: value[1],
              body: value[2],
            } as const)
        )
      ),
    program: (r) =>
      addLoc(
        P.alt(
          r.escapedSymbol,
          r.comment,
          r.assignment,
          // r.conditionalAssignment,

          // r.template,
          r.code,
          r.templateVariable,
          r.text
          // r.anyText
        )
          .many()
          .map((value) => ({ type: "program", value } as const))
      ),
  });
};
