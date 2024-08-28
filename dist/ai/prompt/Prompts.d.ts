export declare const Prompts: {
    renderTemplateText: (template: string | undefined, facts: Record<string, string | undefined>, options?: Partial<{
        skipNotFound: boolean;
    }>) => string;
    textToChatMessageExampleText: ({ text, startChatLinePrefix, afterCharPostfix, endChatLinePostfix, }: {
        text?: string | undefined;
        startChatLinePrefix: string;
        afterCharPostfix: string;
        endChatLinePostfix: string;
    }) => string | undefined;
};
//# sourceMappingURL=Prompts.d.ts.map