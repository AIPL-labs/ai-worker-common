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
const textParser = P.regexp(/[^{}()\\]+/).map((value) => ({
    type: "text",
    value,
}));
const numberParser = P.regexp(/[0-9]+/)
    .map((value) => Number(value))
    .map((value) => ({ type: "number", value }));
const booleanParser = P.alt(P.string("true"), P.string("false"))
    .map((value) => Boolean(value.toLowerCase()))
    .map((value) => ({ type: "boolean", value }));
const innerTemplateVariable = addLoc(identifierParser)
    // .map(
    //   (identifier) =>
    //     ({
    //       type: "templateVariable",
    //       identifier,
    //       defaultText: undefined,
    //     } as const)
    // );
    .chain((identifier) => P.alt(P.string(":")
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
        }))),
        leftParen: () => addLoc(P.string("(").map(() => ({ type: "symbol", value: "(" }))),
        rightParen: () => addLoc(P.string(")").map(() => ({ type: "symbol", value: ")" }))),
        text: () => addLoc(textParser),
        singleQuoteStringLiteral: (r) => P.alt(r.singleQuoteStringLiteral3, r.singleQuoteStringLiteral2, r.singleQuoteStringLiteral1),
        singleQuoteStringLiteral1: (r) => addLoc(P.alt(P.seq(P.string("'"), r.templateSingle1, P.string("'"))).map((value) => ({
            type: "stringLiteral",
            value: value[1],
        }))),
        singleQuoteStringLiteral2: (r) => addLoc(P.alt(P.seq(P.string("''"), r.templateSingle2, P.string("''"))).map((value) => ({
            type: "stringLiteral",
            value: value[1],
        }))),
        singleQuoteStringLiteral3: (r) => addLoc(P.alt(P.seq(P.string("'''"), r.templateSingle3, P.string("'''"))).map((value) => ({
            type: "stringLiteral",
            value: value[1],
        }))),
        // TODO / HACK figure out why parsimon 'locks on' to {{{ rather than alting to {{
        doubleQuoteStringLiteral: (r) => addLoc(P.alt(P.seq(P.string('"'), r.templateDouble1, P.string('"'))).map((value) => ({
            type: "stringLiteral",
            value: value[1],
        }))),
        stringLiteral: (r) => addLoc(P.alt(r.doubleQuoteStringLiteral, r.singleQuoteStringLiteral)),
        entry: (r) => addLoc(P.seq(P.regex(/[a-zA-Z0-9-_.]+/), P.optWhitespace, P.alt(P.string(":"), P.string("=="), P.string("=")), P.optWhitespace, r.stringLiteral).map((value) => ({
            type: "entry",
            key: value[0],
            op: value[2],
            value: value[4],
        }))),
        list: (r) => addLoc(P.seq(r.leftParen, P.optWhitespace, P.seq(P.optWhitespace, r.entry, P.optWhitespace, P.alt(P.string(","), P.succeed(undefined)), P.optWhitespace)
            .map((v) => v[1])
            .many()
            .map((values) => ({
            type: "list",
            values: values,
        })), P.optWhitespace, r.rightParen).map((value) => value[2])),
        urlFunction: (r) => addLoc(P.seq(r.url, P.optWhitespace, P.alt(r.list, P.succeed(undefined))).map((value) => ({
            type: "urlFunction",
            url: value[0],
            args: value[2],
        }))),
        url: () => addLoc(P.seq(P.alt(P.string("https"), P.string("http")), P.string("://"), P.regex(/[a-zA-Z0-9.-]+/), P.alt(P.regex(/\/[a-zA-Z0-9/j._-]*/), P.succeed(undefined)), P.alt(P.regex(/\?[a-zA-Z0-9%&=_.\-+]*/), P.succeed(undefined))).map((value) => ({
            type: "url",
            scheme: value[0],
            host: value[2],
            path: value[3],
            query: value[4],
        }))),
        number: () => addLoc(numberParser),
        boolean: () => addLoc(booleanParser),
        template: (r) => addLoc(P.alt(r.templateDouble, r.templateSingle)),
        templateSingle: (r) => addLoc(P.alt(r.templateSingle3, r.templateSingle2, r.templateSingle1)),
        templateSingle1: (r) => addLoc(P.alt(r.templateVariable1, P.noneOf("'")
        // P.regex(/[^']+/)
        )
            .many()
            .map((value) => ({ type: "template", value }))),
        templateSingle2: (r) => addLoc(P.alt(r.templateVariable2, P.noneOf("'"))
            .many()
            .map((value) => ({ type: "template", value }))),
        templateSingle3: (r) => addLoc(P.alt(r.templateVariable3, 
        // P.regex(/[^']+/)
        P.noneOf("'"))
            .many()
            .map((value) => ({ type: "template", value }))),
        templateDouble: (r) => addLoc(P.alt(r.templateDouble3, r.templateDouble2, r.templateDouble1)),
        templateDouble1: (r) => addLoc(P.alt(r.templateVariable1, P.noneOf('"')
        // P.regex(/[^{}"]+/)
        )
            .many()
            .map((value) => ({ type: "template", value }))),
        templateDouble2: (r) => addLoc(P.alt(r.templateVariable2, P.noneOf('"')
        // P.regex(/[^{}"]+/)
        )
            .many()
            .map((value) => ({ type: "template", value }))),
        templateDouble3: (r) => addLoc(P.alt(r.templateVariable3, 
        // P.regex(/[^{}"]+/)
        P.noneOf('"'))
            .many()
            .map((value) => ({ type: "template", value }))),
        identifier: () => addLoc(identifierParser),
        operator: () => addLoc(operatorParser),
        comment: () => addLoc(commentParser),
        templateVariable: (r) => addLoc(P.alt(r.templateVariable3, r.templateVariable2, r.templateVariable1)),
        templateVariable1: () => addLoc(P.seq(P.string("{"), innerTemplateVariable, P.string("}")).map((value) => value[1])),
        templateVariable2: () => addLoc(P.seq(P.string("{{"), innerTemplateVariable, P.string("}}")).map((value) => value[1])),
        templateVariable3: () => addLoc(P.seq(P.string("{{{"), innerTemplateVariable, P.string("}}}")).map((value) => value[1])),
        directAssignment: (r) => addLoc(P.seq(r.leftParen, P.optWhitespace, P.alt(r.stringLiteral), P.optWhitespace, P.string("-->"), P.optWhitespace, r.identifier, P.optWhitespace, r.rightParen).map((value) => ({
            type: "directAssignment",
            question: value[2],
            identifier: value[6],
        }))),
        assignment: (r) => addLoc(P.seq(r.leftParen, P.optWhitespace, P.alt(r.stringLiteral, r.urlFunction), P.optWhitespace, P.string("->"), P.optWhitespace, r.identifier, P.optWhitespace, r.rightParen).map((value) => ({
            type: "assignment",
            question: value[2],
            identifier: value[6],
        }))),
        binaryExpr: (r) => addLoc(P.seq(r.leftParen, P.optWhitespace, P.alt(r.expr, r.number, r.boolean, r.unaryExpr, r.identifier), P.optWhitespace, r.operator, P.optWhitespace, P.alt(r.expr, r.number, r.boolean, r.unaryExpr, r.identifier), P.optWhitespace, r.rightParen).map((result) => ({
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
        code: (r) => addLoc(P.seq(r.leftParen, P.alt(r.expr), r.program, r.rightParen).map((value) => ({
            type: "code",
            condition: value[1],
            body: value[2],
        }))),
        program: (r) => addLoc(P.alt(r.escapedSymbol, r.comment, r.directAssignment, r.assignment, 
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