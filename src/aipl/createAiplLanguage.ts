import { isDefined } from "@mjtdev/engine";
import P from "parsimmon";
import type { AiplAstSpec } from "./AiplAstSpec";

const addLoc = <T>(parser: P.Parser<T>) => {
  return parser
    .mark()
    .map(
      (mark) =>
        ({ ...mark.value, loc: { start: mark.start, end: mark.end } } as const)
    );
};

// const identifierParser = P.regexp(/[a-zA-Z_][a-zA-Z0-9_.]+/).map(
//   (value) =>
//     ({
//       type: "identifier",
//       value,
//     } as const)
// );
const identifierParser = P.alt(
  P.seq(
    P.regexp(/[a-zA-Z_][a-zA-Z0-9_]+/),
    P.string("."),
    P.regexp(/[a-zA-Z_][a-zA-Z0-9_]+/)
  ),
  P.regexp(/[a-zA-Z_][a-zA-Z0-9_]+/)
).map(
  (value) =>
    ({
      type: "identifier",
      value: Array.isArray(value) ? value.join("") : value,
    } as const)
);

const operatorParser = P.alt(
  P.string("&&"),
  P.string("&"),
  P.string("||"),
  P.string("|"),

  P.string(">="),
  P.string(">"),
  P.string("<="),
  P.string("<"),
  P.string("=="),
  P.string("="),
  P.string("!=="),
  P.string("!=")
).map(
  (value) =>
    ({
      type: "operator",
      value,
    } as const)
);

const textParser = P.regexp(/[^{}()\\]+/).map(
  (value) =>
    ({
      type: "text",
      value,
    } as const)
);

const numberParser = P.regexp(/[0-9]+/)
  .map((value) => Number(value))
  .map((value) => ({ type: "number", value } as const));

const booleanParser = P.alt(P.string("true"), P.string("false"))
  .map((value) => value.toLowerCase() === "true")
  .map((value) => ({ type: "boolean", value } as const));

// const innerTemplateVariable = addLoc(identifierParser)
const innerTemplateVariable = (r: P.TypedLanguage<AiplAstSpec>) =>
  addLoc(r.transformExpr).chain((transformExpr) =>
    P.alt(
      P.string(":")
        .then(P.regexp(/[^}]+/))
        .map(
          (defaultValue) =>
            ({
              type: "templateVariable",
              transformExpr,
              // identifier,
              defaultValue,
            } as const)
        ),
      P.succeed({
        type: "templateVariable",
        transformExpr,
        // identifier,
        defaultText: undefined,
      } as const)
    )
  );

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
// const multilineCommentParser = P.seq(
//   P.string("(%%"),
//   P.regex(/.*?(?=%\))/),
//   P.string("%)")
// ).map(
//   (value) =>
//     ({
//       type: "multilineComment",
//       value: value[1],
//     } as const)
// );
const multilineCommentParser = P.string("(##").then(
  // P.regex(/[^)]+/)
  // P.regex(/.*?(?=%\))/mg)
  P.regex(/[\s\S]*?(?=#\))/)
    .skip(P.string("#)"))
    .map(
      (value) =>
        ({
          type: "multilineComment",
          value,
        } as const)
    )
);
export const createAiplLanguage = ({
  transforms = [],
}: Partial<Readonly<{ transforms: readonly string[] }>> = {}) => {
  return P.createLanguage<AiplAstSpec>({
    escapedSymbol: (r) =>
      addLoc(
        P.seq(
          P.string("\\"),
          P.alt(r.leftParen, r.rightParen, r.leftCurlyBrace, r.rightCurlyBrace)
        ).map(
          (value) =>
            ({
              type: "escapedSymbol",
              value: value[1].value,
            } as const)
        )
      ),

    leftParen: () =>
      addLoc(
        P.string("(").map(() => ({ type: "symbol", value: "(" } as const))
      ),
    rightParen: () =>
      addLoc(
        P.string(")").map(() => ({ type: "symbol", value: ")" } as const))
      ),
    leftCurlyBrace: () =>
      addLoc(
        P.string("{").map(() => ({ type: "symbol", value: "{" } as const))
      ),
    rightCurlyBrace: () =>
      addLoc(
        P.string("}").map(() => ({ type: "symbol", value: "}" } as const))
      ),

    text: () => addLoc(textParser),

    singleQuoteStringLiteral: (r) =>
      P.alt(
        r.singleQuoteStringLiteral3,
        r.singleQuoteStringLiteral2,
        r.singleQuoteStringLiteral1
      ),

    singleQuoteStringLiteral1: (r) =>
      addLoc(
        P.alt(P.seq(P.string("'"), r.templateSingle1, P.string("'"))).map(
          (value) =>
            ({
              type: "stringLiteral",
              value: value[1],
            } as const)
        )
      ),
    singleQuoteStringLiteral2: (r) =>
      addLoc(
        P.alt(P.seq(P.string("''"), r.templateSingle2, P.string("''"))).map(
          (value) =>
            ({
              type: "stringLiteral",
              value: value[1],
            } as const)
        )
      ),
    singleQuoteStringLiteral3: (r) =>
      addLoc(
        P.alt(P.seq(P.string("'''"), r.templateSingle3, P.string("'''"))).map(
          (value) =>
            ({
              type: "stringLiteral",
              value: value[1],
            } as const)
        )
      ),

    // TODO / HACK figure out why parsimon 'locks on' to {{{ rather than alting to {{
    doubleQuoteStringLiteral: (r) =>
      addLoc(
        P.alt(P.seq(P.string('"'), r.templateDouble1, P.string('"'))).map(
          (value) =>
            ({
              type: "stringLiteral",
              value: value[1],
            } as const)
        )
      ),

    stringLiteral: (r) =>
      addLoc(P.alt(r.doubleQuoteStringLiteral, r.singleQuoteStringLiteral)),

    entry: (r) =>
      addLoc(
        P.seq(
          P.regex(/[a-zA-Z0-9-_.]+/),
          P.optWhitespace,
          P.alt(P.string(":"), P.string("=="), P.string("=")),
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

    url: (r) =>
      addLoc(
        P.seq(
          P.alt(P.string("https"), P.string("http")),
          P.string("://"),
          P.regex(/[a-zA-Z0-9.-]+/),
          P.alt(P.regex(/:[\d]*/), P.succeed(undefined)),
          P.alt(
            P.seq(P.string("/"), r.stringLiteral),
            P.seq(P.string("/"), P.regex(/[a-zA-Z0-9/j._-]*/)),
            // P.regex(/\/[a-zA-Z0-9/j._-]*/),
            P.succeed(undefined)
          ),
          P.alt(P.regex(/\?[a-zA-Z0-9%&=_.\-+]*/), P.succeed(undefined))
        ).map(
          (value) =>
            ({
              type: "url",
              scheme: value[0],
              host: value[2],
              port: value[3]?.replace(":", ""),
              path: isDefined(value[4]?.[1]) ? value[4][1] : undefined,
              query: value[5],
            } as const)
        )
      ),

    number: () => addLoc(numberParser),
    boolean: () => addLoc(booleanParser),

    template: (r) => addLoc(P.alt(r.templateDouble, r.templateSingle)),
    templateSingle: (r) =>
      addLoc(P.alt(r.templateSingle3, r.templateSingle2, r.templateSingle1)),
    templateSingle1: (r) =>
      addLoc(
        P.alt(
          r.templateVariable1,
          P.noneOf("'")

          // P.regex(/[^']+/)
        )
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    templateSingle2: (r) =>
      addLoc(
        P.alt(r.templateVariable2, P.noneOf("'"))
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    templateSingle3: (r) =>
      addLoc(
        P.alt(
          r.templateVariable3,
          // P.regex(/[^']+/)

          P.noneOf("'")
        )
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    templateDouble: (r) =>
      addLoc(P.alt(r.templateDouble3, r.templateDouble2, r.templateDouble1)),
    templateDouble1: (r) =>
      addLoc(
        P.alt(
          r.templateVariable1,
          P.noneOf('"')
          // P.regex(/[^{}"]+/)
        )
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    templateDouble2: (r) =>
      addLoc(
        P.alt(
          r.templateVariable2,

          P.noneOf('"')
          // P.regex(/[^{}"]+/)
        )
          .many()
          .map((value) => ({ type: "template", value }))
      ),
    templateDouble3: (r) =>
      addLoc(
        P.alt(
          r.templateVariable3,
          // P.regex(/[^{}"]+/)

          P.noneOf('"')
        )
          .many()
          .map((value) => ({ type: "template", value }))
      ),

    identifier: () => addLoc(identifierParser),
    transformExpr: (r) =>
      addLoc(
        P.seq(
          r.identifier,
          P.alt(P.seq(P.string("."), r.transform), P.succeed(undefined))
        ).map((value) => ({
          type: "transformExpr",
          identifier: value[0],
          transform: isDefined(value[1]) ? value[1][1] : undefined,
        }))
      ),
    transform: (r) =>
      addLoc(
        P.seq(
          P.alt(...transforms.map((transform) => P.string(transform))),
          P.alt(
            P.seq(P.string("("), P.optWhitespace, P.string(")")).map(
              () => undefined
            ),
            P.seq(
              P.string("("),
              P.optWhitespace,
              P.alt(r.stringLiteral, r.program),
              P.optWhitespace,
              P.string(")")
            ).map((values) => values[2])
          )
        ).map((value) => ({
          type: "transform",
          name: value[0],
          arg: value[1],
        }))
      ),

    operator: () => addLoc(operatorParser),
    comment: () => addLoc(commentParser),
    multilineComment: () => addLoc(multilineCommentParser),

    templateVariable: (r) =>
      addLoc(
        P.alt(r.templateVariable3, r.templateVariable2, r.templateVariable1)
      ),
    templateVariable1: (r) =>
      addLoc(
        P.seq(P.string("{"), innerTemplateVariable(r), P.string("}")).map(
          (value) => value[1]
        )
      ),
    templateVariable2: (r) =>
      addLoc(
        P.seq(P.string("{{"), innerTemplateVariable(r), P.string("}}")).map(
          (value) => value[1]
        )
      ),
    templateVariable3: (r) =>
      addLoc(
        P.seq(P.string("{{{"), innerTemplateVariable(r), P.string("}}}")).map(
          (value) => value[1]
        )
      ),

    directAssignment: (r) =>
      addLoc(
        P.seq(
          r.leftParen,
          P.optWhitespace,
          P.alt(r.stringLiteral),
          P.optWhitespace,
          P.string("-->"),
          P.optWhitespace,
          r.transformExpr,
          P.optWhitespace,
          r.rightParen
        ).map(
          (value) =>
            ({
              type: "directAssignment",
              question: value[2],
              transformExpr: value[6],
            } as const)
        )
      ),

    assignment: (r) =>
      addLoc(
        P.seq(
          r.leftParen,
          P.optWhitespace,
          P.alt(r.stringLiteral, r.urlFunction),
          P.optWhitespace,
          P.string("->"),
          P.optWhitespace,
          r.transformExpr,
          P.optWhitespace,
          r.rightParen
        ).map(
          (value) =>
            ({
              type: "assignment",
              question: value[2],
              transformExpr: value[6],
            } as const)
        )
      ),

    apply: (r) =>
      addLoc(
        P.seq(
          r.leftParen,
          P.optWhitespace,
          r.stringLiteral,
          P.optWhitespace,
          P.string("=>"),
          P.optWhitespace,
          r.identifier,
          P.optWhitespace,
          r.rightParen
        ).map(
          (value) =>
            ({
              type: "apply",
              param: value[2],
              identifier: value[6],
            } as const)
        )
      ),
    binaryExpr: (r) =>
      addLoc(
        P.seq(
          r.leftParen,
          P.optWhitespace,
          P.alt(
            r.stringLiteral,
            r.number,
            r.boolean,
            r.identifier,
            r.expr,
            r.unaryExpr
          ),
          P.optWhitespace,
          r.operator,
          P.optWhitespace,
          P.alt(
            r.stringLiteral,
            r.number,
            r.boolean,
            r.identifier,
            r.expr,
            r.unaryExpr
          ),
          P.optWhitespace,
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
          r.number,
          r.boolean,
          r.identifier
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
        P.seq(r.leftParen, P.alt(r.expr), r.program, r.rightParen).map(
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
          r.multilineComment,
          r.comment,
          r.directAssignment,
          r.assignment,
          r.apply,

          r.code,
          r.templateVariable,
          r.text
        )
          .many()
          .map((value) => ({ type: "program", value } as const))
      ),
  });
};
