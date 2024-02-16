export declare const parseAiFunctionText: (text: string, options?: Partial<{
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
export declare const parseAiFunctionArgText: (text: string) => Record<string, string>;
//# sourceMappingURL=parseAiFunctionText.d.ts.map