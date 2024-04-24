import P from "parsimmon";
const addLoc = (parser) => {
    return parser
        .mark()
        .map((mark) => ({ ...mark.value, loc: { start: mark.start, end: mark.end } }));
};
const identifierParser = P.regexp(/[a-zA-Z_][a-zA-Z0-9_.]+/).map((value) => ({
    type: "identifier",
    value,
}));
const operatorParser = P.alt(P.string("&&"), P.string("&"), P.string("||"), P.string("|"), P.string(">="), P.string(">"), P.string("<="), P.string("<"), P.string("=="), P.string("="), P.string("!=="), P.string("!=")).map((value) => ({
    type: "operator",
    value,
}));
const textParser = P.regexp(/[^{}()\\]+/).map(
// const textParser = P.regexp(/[^{})]+/).map(
// const textParser = P.regexp(/[^{}]+/).map(
(value) => ({
    type: "text",
    value,
}));
const numberParser = P.regexp(/[0-9]+/)
    .map((value) => Number(value))
    .map((value) => ({ type: "number", value }));
const booleanParser0 = P.regexp(/(true|false)/i)
    .map((value) => Boolean(value.toLowerCase()))
    .map((value) => ({ type: "boolean", value }));
const booleanParser = P.alt(P.string("true"), P.string("false"))
    .map((value) => Boolean(value.toLowerCase()))
    .map((value) => ({ type: "boolean", value }));
const innerTemplateVariable = addLoc(identifierParser).chain((identifier) => P.alt(P.string(":")
    .then(P.regexp(/[^}]+/))
    .map((defaultValue) => ({
    type: "templateVariable",
    identifier,
    defaultValue,
})), P.succeed({
    type: "templateVariable",
    identifier,
    defaultText: undefined,
})));
const templateVariableParser = P.alt(P.seq(P.string("{"), innerTemplateVariable, P.string("}")), P.seq(P.string("{{"), innerTemplateVariable, P.string("}}"))).map((value) => value[1]);
const commentParser = P.string("(#").then(P.regex(/[^)]+/)
    .skip(P.string(")"))
    .map((value) => ({
    type: "comment",
    value,
})));
export const createAiplLanguage = () => {
    return P.createLanguage({
        escapedSymbol: (r) => addLoc(P.seq(P.string("\\"), P.alt(r.leftParen, r.rightParen)).map((value) => ({
            type: "escapedSymbol",
            value: value[1].value,
            // value: ")",
        }))),
        leftParen: () => addLoc(
        // P.seq(P.lookahead(P.regex(/^[\\]/)), P.string("("))
        // P.seq(P.string("(")).map(
        P.string("(").map(() => ({ type: "symbol", value: "(" }))),
        rightParen: () => addLoc(
        // P.seq(P.lookahead(P.regex(/^[\\]/)), P.string(")"))
        // P.seq(P.string(")"))
        P.string(")").map(() => ({ type: "symbol", value: ")" }))),
        text: () => addLoc(textParser),
        stringLiteral: (r) => addLoc(P.alt(P.seq(P.string('"'), r.template, P.string('"')), P.seq(P.string("'"), r.template, P.string("'"))).map((value) => ({
            type: "stringLiteral",
            value: value[1],
        }))),
        entry: (r) => addLoc(P.seq(P.regex(/[a-zA-Z0-9-_.]+/), P.optWhitespace, P.alt(P.string(":"), P.string("=")), P.optWhitespace, r.stringLiteral).map((value) => ({
            type: "entry",
            key: value[0],
            op: value[2],
            value: value[4],
        }))),
        list: (r) => addLoc(P.seq(
        // P.string("("),
        r.leftParen, P.optWhitespace, P.seq(P.optWhitespace, r.entry, P.optWhitespace, P.alt(P.string(","), P.succeed(undefined)), P.optWhitespace)
            .map((v) => v[1])
            .many()
            .map((values) => ({
            type: "list",
            values: values,
        })), P.optWhitespace, r.rightParen
        // P.string(")")
        ).map((value) => value[2])),
        urlFunction: (r) => addLoc(P.seq(r.url, P.optWhitespace, P.alt(r.list, P.succeed(undefined))).map((value) => ({
            type: "urlFunction",
            url: value[0],
            args: value[2],
        }))),
        url: () => addLoc(P.seq(P.alt(P.string("https"), P.string("http")), P.string("://"), P.regex(/[a-zA-Z0-9.-]+/), P.alt(P.regex(/\/[a-zA-Z0-9/j._-]*/), P.succeed(undefined)), P.alt(P.regex(/\?[a-zA-Z0-9%&=_.\-+]*/), P.succeed(undefined))
        // P.alt(P.regex(/\/[a-zA-Z0-9\/j._-]*/), P.succeed(undefined)),
        // P.alt(P.regex(/\?[a-zA-Z0-9%&=_\.\-\+]*/), P.succeed(undefined))
        ).map((value) => ({
            type: "url",
            scheme: value[0],
            host: value[2],
            path: value[3],
            query: value[4],
        }))),
        number: () => addLoc(numberParser),
        boolean: () => addLoc(booleanParser),
        template: (r) => addLoc(P.alt(r.templateVariable, P.regex(/[^{}"]+/))
            .many()
            .map((value) => ({ type: "template", value }))),
        identifier: () => addLoc(identifierParser),
        operator: () => addLoc(operatorParser),
        comment: () => addLoc(commentParser),
        templateVariable: () => addLoc(templateVariableParser),
        assignment: (r) => addLoc(P.seq(
        // P.string("("),
        r.leftParen, P.optWhitespace, P.alt(r.stringLiteral, r.urlFunction), P.optWhitespace, P.string("->"), P.optWhitespace, r.identifier, P.optWhitespace, 
        // P.string(")")
        r.rightParen).map((value) => ({
            type: "assignment",
            question: value[2],
            identifier: value[6],
        }))),
        binaryExpr: (r) => addLoc(P.seq(
        // P.string("("),
        r.leftParen, P.optWhitespace, P.alt(r.expr, r.number, r.boolean, r.unaryExpr, r.identifier), P.optWhitespace, r.operator, P.optWhitespace, P.alt(r.expr, r.number, r.boolean, r.unaryExpr, r.identifier), P.optWhitespace, 
        // P.string(")")
        r.rightParen).map((result) => ({
            type: "binaryExpr",
            left: result[2],
            op: result[4],
            right: result[6],
        }))),
        expr: (r) => addLoc(P.alt(r.binaryExpr, r.stringLiteral, r.unaryExpr, r.number, r.boolean, r.identifier).map((value) => ({
            type: "expr",
            value,
        }))),
        unaryExpr: (r) => addLoc(P.seq(P.string("!"), r.expr).map((value) => ({ type: "unaryExpr", op: value[0], operand: value[1] }))),
        code: (r) => addLoc(P.seq(
        // P.string("("),
        r.leftParen, P.alt(r.expr), r.program, r.rightParen
        // P.string(")")
        ).map((value) => ({
            type: "code",
            condition: value[1],
            body: value[2],
        }))),
        program: (r) => addLoc(P.alt(r.escapedSymbol, r.comment, r.assignment, 
        // r.conditionalAssignment,
        // r.template,
        r.code, r.templateVariable, r.text
        // r.anyText
        )
            .many()
            .map((value) => ({ type: "program", value }))),
    });
};
//# sourceMappingURL=createAiplLanguage.js.map