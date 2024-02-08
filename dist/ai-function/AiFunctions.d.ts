export declare const AiFunctions: {
    createAiFunctionPromptText: ({ aiName, userName, functions, }: {
        functions: import("..").AiFunctionDescription[];
        aiName: string;
        userName: string;
    }) => string | undefined;
    parseAiFunctionText: (text: string) => {
        readonly calls: {
            readonly match: RegExpMatchArray;
            readonly matchesTextLength: number;
            readonly before: string;
            readonly name: string;
            readonly args: Record<string, string>;
            readonly after: string;
        }[];
        readonly strippedText: string;
    };
    parseAiFunctionArgText: (text: string) => Record<string, string>;
    AI_FUNCTION_SYMBOL: string;
    AI_FUNCTION_PREFIX: string;
};
//# sourceMappingURL=AiFunctions.d.ts.map