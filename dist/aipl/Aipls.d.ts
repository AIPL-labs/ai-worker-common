/// <reference types="parsimmon" />
export declare const Aipls: {
    tryParseAipl: (text: string, languageParams?: Partial<Readonly<{
        transforms: readonly string[];
    }>> | undefined) => {
        type: "program";
        value: ({
            type: "text";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "escapedSymbol";
            value: "(" | ")";
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "comment";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "multilineComment";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "apply";
            param: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
            type: "assignment";
            question: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
                    port?: string | undefined;
                    path?: string | {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | undefined;
                    query?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                args?: {
                    type: "list";
                    values: {
                        type: "entry";
                        key: string;
                        op: "=" | "==" | ":";
                        value: {
                            type: "stringLiteral";
                            value: {
                                type: "template";
                                value: (string | {
                                    type: "templateVariable";
                                    transformExpr: {
                                        type: "transformExpr";
                                        identifier: {
                                            type: "identifier";
                                            value: string;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        };
                                        transform?: {
                                            type: "transform";
                                            name: string;
                                            arg?: any | any | undefined;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        } | undefined;
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
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: any;
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "directAssignment";
            question: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
                    port?: string | undefined;
                    path?: string | {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | undefined;
                    query?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                args?: {
                    type: "list";
                    values: {
                        type: "entry";
                        key: string;
                        op: "=" | "==" | ":";
                        value: {
                            type: "stringLiteral";
                            value: {
                                type: "template";
                                value: (string | {
                                    type: "templateVariable";
                                    transformExpr: {
                                        type: "transformExpr";
                                        identifier: {
                                            type: "identifier";
                                            value: string;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        };
                                        transform?: {
                                            type: "transform";
                                            name: string;
                                            arg?: any | any | undefined;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        } | undefined;
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
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: any;
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "templateVariable";
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | any)[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
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
                            transformExpr: {
                                type: "transformExpr";
                                identifier: {
                                    type: "identifier";
                                    value: string;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                transform?: {
                                    type: "transform";
                                    name: string;
                                    arg?: any | any | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                } | undefined;
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
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
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
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
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
    };
    parseAipl: (text: string, params?: Partial<Readonly<{
        transforms: readonly string[];
    }>> | undefined) => import("parsimmon").Result<{
        type: "program";
        value: ({
            type: "text";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "escapedSymbol";
            value: "(" | ")";
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "comment";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "multilineComment";
            value: string;
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "apply";
            param: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
            type: "assignment";
            question: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
                    port?: string | undefined;
                    path?: string | {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | undefined;
                    query?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                args?: {
                    type: "list";
                    values: {
                        type: "entry";
                        key: string;
                        op: "=" | "==" | ":";
                        value: {
                            type: "stringLiteral";
                            value: {
                                type: "template";
                                value: (string | {
                                    type: "templateVariable";
                                    transformExpr: {
                                        type: "transformExpr";
                                        identifier: {
                                            type: "identifier";
                                            value: string;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        };
                                        transform?: {
                                            type: "transform";
                                            name: string;
                                            arg?: any | any | undefined;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        } | undefined;
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
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: any;
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "directAssignment";
            question: {
                type: "stringLiteral";
                value: {
                    type: "template";
                    value: (string | {
                        type: "templateVariable";
                        transformExpr: {
                            type: "transformExpr";
                            identifier: {
                                type: "identifier";
                                value: string;
                                loc: import("./AiplAstSpec").AiplLoc;
                            };
                            transform?: {
                                type: "transform";
                                name: string;
                                arg?: any | any | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            } | undefined;
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
                    port?: string | undefined;
                    path?: string | {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | undefined;
                    query?: string | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                args?: {
                    type: "list";
                    values: {
                        type: "entry";
                        key: string;
                        op: "=" | "==" | ":";
                        value: {
                            type: "stringLiteral";
                            value: {
                                type: "template";
                                value: (string | {
                                    type: "templateVariable";
                                    transformExpr: {
                                        type: "transformExpr";
                                        identifier: {
                                            type: "identifier";
                                            value: string;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        };
                                        transform?: {
                                            type: "transform";
                                            name: string;
                                            arg?: any | any | undefined;
                                            loc: import("./AiplAstSpec").AiplLoc;
                                        } | undefined;
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
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: any;
                                defaultValue?: string | undefined;
                                loc: import("./AiplAstSpec").AiplLoc;
                            })[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
                loc: import("./AiplAstSpec").AiplLoc;
            };
            loc: import("./AiplAstSpec").AiplLoc;
        } | {
            type: "templateVariable";
            transformExpr: {
                type: "transformExpr";
                identifier: {
                    type: "identifier";
                    value: string;
                    loc: import("./AiplAstSpec").AiplLoc;
                };
                transform?: {
                    type: "transform";
                    name: string;
                    arg?: {
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | any)[];
                            loc: import("./AiplAstSpec").AiplLoc;
                        };
                        loc: import("./AiplAstSpec").AiplLoc;
                    } | any | undefined;
                    loc: import("./AiplAstSpec").AiplLoc;
                } | undefined;
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
                            transformExpr: {
                                type: "transformExpr";
                                identifier: {
                                    type: "identifier";
                                    value: string;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                };
                                transform?: {
                                    type: "transform";
                                    name: string;
                                    arg?: any | any | undefined;
                                    loc: import("./AiplAstSpec").AiplLoc;
                                } | undefined;
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
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
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
                        type: "stringLiteral";
                        value: {
                            type: "template";
                            value: (string | {
                                type: "templateVariable";
                                transformExpr: {
                                    type: "transformExpr";
                                    identifier: {
                                        type: "identifier";
                                        value: string;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    };
                                    transform?: {
                                        type: "transform";
                                        name: string;
                                        arg?: any | any | undefined;
                                        loc: import("./AiplAstSpec").AiplLoc;
                                    } | undefined;
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
    renderAiplProgramText: (programText: string, context: import("..").AiplContext) => string;
    evaluateAiplProgram: import("./runtime/AiplNodeEvaluator").AiplNodeEvaluator<"program">;
    evaluateNodeToString: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"stringLiteral" | "identifier" | "transformExpr" | "templateVariable" | "template", string>;
    evaluateNodeToNumber: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"number" | "boolean" | "stringLiteral" | "identifier" | "expr" | "unaryExpr" | "binaryExpr", number>;
    evaluateNodeToBoolean: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"number" | "boolean" | "stringLiteral" | "identifier" | "expr" | "unaryExpr" | "binaryExpr", boolean>;
    evaluateBinaryNodeToNumber: import("./runtime/AiplNodeEvaluator").AiplNodeBinaryPrimitiveEvaluator<"stringLiteral" | "identifier", number>;
    evaluateListNodeToOperatorObjects: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"list", Record<"=" | "==" | ":", Record<string, string>>>;
};
//# sourceMappingURL=Aipls.d.ts.map