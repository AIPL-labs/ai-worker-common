export declare const AiFunctions: {
    createAiFunctionPromptText: ({ aiName, userName, functions, messageTemplate: messageTemplate, }: {
        functions: import("..").AiFunctionDescription[];
        aiName: string;
        userName: string;
        messageTemplate?: import("../chat/ChatMessageTemplate").ChatMessageTemplate | undefined;
    }) => string | undefined;
    parseAiFunctionText: (text: string, options?: Partial<{
        aiFunctionPrefix: string;
    }>) => {
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