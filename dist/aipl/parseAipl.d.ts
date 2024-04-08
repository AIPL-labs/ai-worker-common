/// <reference types="parsimmon" />
export declare const parseAipl: (text: string) => import("parsimmon").Result<{
    type: "program";
    value: ({
        type: "escapedSymbol";
        value: "(" | ")";
        loc: import("./AiplAstSpec").AiplLoc;
    } | {
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
        } | {
            type: "urlFunction";
            url: {
                type: "url";
                scheme: "http" | "https";
                host: string;
                path?: string | undefined;
                query?: string | undefined;
                loc: import("./AiplAstSpec").AiplLoc;
            };
            args?: {
                type: "list";
                values: {
                    type: "entry";
                    key: string;
                    op: "=" | ":";
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
                    };
                    loc: import("./AiplAstSpec").AiplLoc;
                }[];
                loc: import("./AiplAstSpec").AiplLoc;
            } | undefined;
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
                type: "number";
                value: number;
                loc: import("./AiplAstSpec").AiplLoc;
            } | {
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
                type: "identifier";
                value: string;
                loc: import("./AiplAstSpec").AiplLoc;
            } | {
                type: "unaryExpr";
                op: "!";
                operand: any;
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