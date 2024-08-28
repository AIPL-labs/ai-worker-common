export declare const AiCharacters: {
    characterToChatSystemMessages: ({ systemName, character, fieldNameToAiplContext, aiFunctions, messageTemplate, }: {
        systemName: string;
        character: import("..").AppCharacter;
        aiFunctions: import("..").AiFunctionDescription[];
        fieldNameToAiplContext: (filedName: import("..").AppCharacterFieldName) => import("..").AiplContext;
        messageTemplate?: import("../chat/ChatMessageTemplate").ChatMessageTemplate;
    }) => import("..").ChatMessage[];
    /** @deprecated @see Prompts */
    renderCardText: (template: string | undefined, facts: Record<string, string | undefined>, options?: Partial<{
        skipNotFound: boolean;
    }>) => string;
    createCardSystemMessage: ({ systemName, title, text, aiplContext, }: {
        systemName: string;
        title?: string;
        text?: string;
        aiplContext: import("..").AiplContext;
    }) => import("..").ChatMessage | undefined;
    createTavernCard: (draft?: Partial<import("..").AppTavernCard>) => import("..").AppTavernCard;
    DEFAULT_MES_EXAMPLE: string;
    formConfigToSystemMessage: (typeName: string, formConfig: import("..").FormSkillConfig) => string;
    toolConfigToSystemMessage: (toolConfig: import("..").ToolConfig) => string;
};
//# sourceMappingURL=AiCharacters.d.ts.map