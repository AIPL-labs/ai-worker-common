export declare const Aipls: {
    tryParseAipl: (text: string, languageParams?: import("./AiplLangageParams").AiplLangageParams) => {
        type: "program";
        value: import("./AiplAstSpec").AiplAstSpec["escapedSymbol" | "comment" | "multilineComment" | "apply" | "assignment" | "directAssignment" | "text" | "templateVariable" | "code"][];
        loc: import("./AiplAstSpec").AiplLoc;
    };
    parseAipl: (text: string, params?: import("./AiplLangageParams").AiplLangageParams) => import("parsimmon").Result<{
        type: "program";
        value: import("./AiplAstSpec").AiplAstSpec["escapedSymbol" | "comment" | "multilineComment" | "apply" | "assignment" | "directAssignment" | "text" | "templateVariable" | "code"][];
        loc: import("./AiplAstSpec").AiplLoc;
    }>;
    renderAiplProgramText: (programText: string, context: import("..").AiplContext) => string;
    evaluateAiplProgram: import("./runtime/AiplNodeEvaluator").AiplNodeEvaluator<"program">;
    evaluateNodeToString: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"template" | "templateVariable" | "stringLiteral" | "identifier" | "transformExpr", string>;
    evaluateNodeToNumber: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"number" | "boolean" | "stringLiteral" | "identifier" | "expr" | "unaryExpr" | "binaryExpr", number>;
    evaluateNodeToBoolean: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"number" | "boolean" | "stringLiteral" | "identifier" | "expr" | "unaryExpr" | "binaryExpr", boolean>;
    evaluateBinaryNodeToNumber: import("./runtime/AiplNodeEvaluator").AiplNodeBinaryPrimitiveEvaluator<"stringLiteral" | "identifier", number>;
    evaluateListNodeToOperatorObjects: import("./runtime/AiplNodeEvaluator").AiplNodePrimitiveEvaluator<"list", Record<":" | "=" | "==", Record<string, string>>>;
};
//# sourceMappingURL=Aipls.d.ts.map