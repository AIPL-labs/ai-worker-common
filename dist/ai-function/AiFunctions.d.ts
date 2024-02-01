export declare const AiFunctions: {
    createAiFunctionPromptText: ({ aiName, userName, functions, }: {
        functions: string[];
        aiName: string;
        userName: string;
    }) => string | undefined;
    parseAiFunctionText: (text: string) => {
        name: string;
        arg: string;
    } | undefined;
    AI_FUNCTIONS: import("../type/ai-function/AiFunctions").AiFunctionInterface[];
    AI_FUNCTION_SYMBOL: string;
    AI_FUNCTION_PREFIX: string;
};
//# sourceMappingURL=AiFunctions.d.ts.map