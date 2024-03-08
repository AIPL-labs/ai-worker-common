export declare const AiCharacters: {
    characterToChatSystemMessages: ({ systemName, character, facts, aiFunctions, messageTemplate, }: {
        systemName: string;
        character: import("..").AppCharacter;
        aiFunctions: import("..").AiFunctionDescription[];
        facts: {
            char: string | undefined;
            user: string | undefined;
        };
        messageTemplate?: import("../chat/ChatMessageTemplate").ChatMessageTemplate | undefined;
    }) => import("..").ChatMessage[];
    /** @deprecated @see Prompts */
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