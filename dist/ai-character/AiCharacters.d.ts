export declare const AiCharacters: {
    characterToChatSystemMessages: ({ systemName, character, facts, }: {
        systemName: string;
        character: import("..").AppCharacter;
        facts: {
            char: string | undefined;
            user: string | undefined;
        };
    }) => import("..").ChatMessage[];
    renderCardText: (template: string | undefined, facts: Record<string, string | undefined>) => string;
    createCardSystemMessage: ({ systemName: systemName, title, text, facts, }: {
        systemName: string;
        title: string;
        text?: string | undefined;
        facts: Record<string, string | undefined>;
    }) => import("..").ChatMessage | undefined;
    createTavernCard: (draft?: Partial<import("..").AppTavernCard>) => import("..").AppTavernCard;
};
//# sourceMappingURL=AiCharacters.d.ts.map