import P from "parsimmon";
import { AiplAstSpec } from "./AiplAstSpec";

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

const textParser = P.regexp(/[^{}()]+/).map(
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

// const innerTemplateVariableParser = P.alt(
//   // P.seq(P.regex(/[^:]+/), P.string(":"), P.regex(/[^}]+/)),
//   P.seq(P.regex(/[^}]+/))
// ).map((value) => {
//   if (value.length === 1) {
//     return {
//       type: "templateVariable",
//       identifier: value[0],
//       defaultText: undefined,
//     } as const;
//   }
//   // return {
//   //   type: "templateVariable",
//   //   identifier: value[0],
//   //   defaultText: value[1],
//   // } as const;
// });

const templateVariableParser = P.alt(
  P.seq(P.string("{"), innerTemplateVariable, P.string("}")),
  P.seq(P.string("{{"), innerTemplateVariable, P.string("}}"))
  // P.string("{").then(innerTemplateVariable).skip(P.string("}")),
  // P.string("{{").then(innerTemplateVariable).skip(P.string("}}"))
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
    conditionalAssignment: (r) =>
      addLoc(
        P.seq(
          P.string("("),
          P.optWhitespace,
          r.expr,
          P.optWhitespace,
          P.string("?"),
          P.optWhitespace,
          r.stringLiteral,
          P.optWhitespace,
          P.string("->"),
          P.optWhitespace,
          r.identifier,
          P.optWhitespace,
          P.string(")")
        ).map(
          (value) =>
            ({
              type: "conditionalAssignment",
              condition: value[2],
              question: value[6],
              identifier: value[10],
            } as const)
        )
      ),
    assignment: (r) =>
      addLoc(
        P.seq(
          P.string("(="),
          P.optWhitespace,
          r.stringLiteral,
          P.optWhitespace,
          P.string("->"),
          P.optWhitespace,
          r.identifier,
          P.optWhitespace,

          P.string(")")
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
          P.string("("),
          P.optWhitespace,
          P.alt(r.expr, r.identifier, r.number, r.unaryExpr),
          P.optWhitespace,
          r.operator,
          P.optWhitespace,
          P.alt(r.expr, r.identifier, r.number, r.unaryExpr),
          P.optWhitespace,
          P.string(")")
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
        P.alt(r.binaryExpr, r.stringLiteral).map((value) => ({
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
        P.seq(P.string("("), P.alt(r.expr), r.program, P.string(")")).map(
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
          r.comment,
          r.assignment,
          r.conditionalAssignment,

          // r.template,
          r.text,
          r.templateVariable,

          r.code
        )
          .many()
          .map((value) => ({ type: "program", value } as const))
      ),
  });
};
