export declare const AiCharacters: {
    characterToChatSystemMessages: ({ systemName, character, facts, options, }: {
        systemName: string;
        character: import("..").AppCharacter;
        facts: {
            char: string | undefined;
            user: string | undefined;
        };
        options?: Partial<{
            startChatLinePrefix: string;
            afterCharPostfix: string;
            endChatLinePostfix: string;
        }> | undefined;
    }) => import("..").ChatMessage[];
    renderCardText: (template: string | undefined, facts: Record<string, string | undefined>, options?: Partial<{
        skipNotFound: boolean;
    }>) => string;
    createCardSystemMessage: ({ systemName: systemName, title, text, facts, }: {
        systemName: string;
        title?: string | undefined;
        text?: string | undefined;
        facts: Record<string, string | undefined>;
    }) => import("..").ChatMessage | undefined;
    createTavernCard: (draft?: Partial<import("..").AppTavernCard>) => import("..").AppTavernCard;
    DEFAULT_MES_EXAMPLE: string;
};
//# sourceMappingURL=AiCharacters.d.ts.map