/// <reference types="parsimmon" />
export declare const parseAipl: (text: string) => import("parsimmon").Result<{
    type: "program";
    value: ({
        type: "text";
        value: string;
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
        type: "comment";
        value: string;
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
        type: "assignment";
        question: {
            type: "stringLiteral";
            value: {
                type: "template";
                value: (string | {
                    type: "templateVariable";
                    identifier: {
                        type: "identifier";
                        value: string;
                        loc: import("./AiplAstSpec").AiplLoc;
                    };
                    defaultValue?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                })[];
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        };
        identifier: {
            type: "identifier";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        };
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
        type: "conditionalAssignment";
        condition: {
            type: "expr";
            value: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        identifier: {
                            type: "identifier";
                            value: string;
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        defaultValue?: string | undefined;
                        loc: import("./AiplAstSpec").AiplLoc;
                    })[];
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                loc: import("./AiplAstSpec").AiplLoc;
            } | {
                type: "binaryExpr";
                op: {
                    type: "operator";
                    value: import("./AiplAstSpec").AiplOp;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                left: {
                    type: "number";
                    value: number;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | any | {
                    type: "unaryExpr";
                    op: "!";
                    operand: any;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                right: {
                    type: "number";
                    value: number;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | any | {
                    type: "unaryExpr";
                    op: "!";
                    operand: any;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        };
        question: {
            type: "stringLiteral";
            value: {
                type: "template";
                value: (string | {
                    type: "templateVariable";
                    identifier: {
                        type: "identifier";
                        value: string;
                        loc: import("./AiplAstSpec").AiplLoc;
                    };
                    defaultValue?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                })[];
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        };
        identifier: {
            type: "identifier";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        };
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
        type: "templateVariable";
        identifier: {
            type: "identifier";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        };
        defaultValue?: string | undefined;
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
        type: "code";
        condition: {
            type: "expr";
            value: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        identifier: {
                            type: "identifier";
                            value: string;
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        defaultValue?: string | undefined;
                        loc: import("./AiplAstSpec").AiplLoc;
                    })[];
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                loc: import("./AiplAstSpec").AiplLoc;
            } | {
                type: "binaryExpr";
                op: {
                    type: "operator";
                    value: import("./AiplAstSpec").AiplOp;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                left: {
                    type: "number";
                    value: number;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | any | {
                    type: "unaryExpr";
                    op: "!";
                    operand: any;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                right: {
                    type: "number";
                    value: number;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | any | {
                    type: "unaryExpr";
                    op: "!";
                    operand: any;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        };
        body: any;
        loc: import("./AiplAstSpec").AiplLoc;
    })[];
    loc: import("./AiplAstSpec").AiplLoc;
}>;
//# sourceMappingURL=parseAipl.d.ts.map