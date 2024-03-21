export declare const AiCharacters: {
    characterToChatSystemMessages: ({ systemName, character, fieldNameToAiplContext, aiFunctions, messageTemplate, }: {
        systemName: string;
        character: import("..").AppCharacter;
        aiFunctions: import("..").AiFunctionDescription[];
        fieldNameToAiplContext: (filedName: "name" | "tags" | "description" | "personality" | "scenario" | "first_mes" | "mes_example" | "creator_notes" | "system_prompt" | "post_history_instructions" | "alternate_greetings" | "character_book" | "creator" | "character_version" | "extensions") => import("../aipl/runtime/AiplContext").AiplContext;
        messageTemplate?: import("../chat/ChatMessageTemplate").ChatMessageTemplate | undefined;
    }) => import("..").ChatMessage[];
    /** @deprecated @see Prompts */
    renderCardText: (template: string | undefined, facts: Record<string, string | undefined>, options?: Partial<{
        skipNotFound: boolean;
    }>) => string;
    createCardSystemMessage: ({ systemName, title, text, aiplContext, }: {
        systemName: string;
        title?: string | undefined;
        text?: string | undefined;
        aiplContext: import("../aipl/runtime/AiplContext").AiplContext;
    }) => import("..").ChatMessage | undefined;
    createTavernCard: (draft?: Partial<import("..").AppTavernCard>) => import("..").AppTavernCard;
    DEFAULT_MES_EXAMPLE: string;
};
//# sourceMappingURL=AiCharacters.d.ts.map