export type AiplNodeType = keyof AiplAstSpec;
export type AiplNode = AiplAstSpec[keyof AiplAstSpec];
type Index = {
    /** zero-based character offset */
    offset: number;
    /** one-based line offset */
    line: number;
    /** one-based column offset */
    column: number;
};
export type AiplLoc = {
    start: Index;
    end: Index;
};
export type AiplBooleanOp = "&" | "&&" | "|" | "||";
export type AiplComparisonOp = ">" | "<" | "=" | "==" | "!=" | "!==";
export type AiplOp = AiplBooleanOp | AiplComparisonOp;
export type AiplAstSpec = {
    text: {
        type: "text";
        value: string;
        loc: AiplLoc;
    };
    stringLiteral: {
        type: "stringLiteral";
        value: AiplAstSpec["template"];
        loc: AiplLoc;
    };
    number: {
        type: "number";
        value: number;
        loc: AiplLoc;
    };
    identifier: {
        type: "identifier";
        value: string;
        loc: AiplLoc;
    };
    operator: {
        type: "operator";
        value: AiplOp;
        loc: AiplLoc;
    };
    comment: {
        type: "comment";
        value: string;
        loc: AiplLoc;
    };
    assignment: {
        type: "assignment";
        question: AiplAstSpec["stringLiteral"];
        identifier: AiplAstSpec["identifier"];
        loc: AiplLoc;
    };
    conditionalAssignment: {
        type: "conditionalAssignment";
        condition: AiplAstSpec["expr"];
        question: AiplAstSpec["stringLiteral"];
        identifier: AiplAstSpec["identifier"];
        loc: AiplLoc;
    };
    templateVariable: {
        type: "templateVariable";
        identifier: AiplAstSpec["identifier"];
        defaultValue?: string;
        loc: AiplLoc;
    };
    expr: {
        type: "expr";
        value: AiplAstSpec["stringLiteral" | "binaryExpr"];
        loc: AiplLoc;
    };
    unaryExpr: {
        type: "unaryExpr";
        op: "!";
        operand: AiplAstSpec["expr"];
        loc: AiplLoc;
    };
    binaryExpr: {
        type: "binaryExpr";
        op: AiplAstSpec["operator"];
        left: AiplAstSpec["expr" | "identifier" | "number" | "unaryExpr"];
        right: AiplAstSpec["expr" | "identifier" | "number" | "unaryExpr"];
        loc: AiplLoc;
    };
    code: {
        type: "code";
        condition: AiplAstSpec["expr"];
        body: AiplAstSpec["program"];
        loc: AiplLoc;
    };
    template: {
        type: "template";
        value: (AiplAstSpec["templateVariable"] | string)[];
        loc: AiplLoc;
    };
    program: {
        type: "program";
        value: AiplAstSpec["comment" | "assignment" | "conditionalAssignment" | "text" | "templateVariable" | "code"][];
        loc: AiplLoc;
    };
};
export {};
//# sourceMappingURL=AiplAstSpec.d.ts.map