export declare const Chats: {
    createChat: (draft?: Partial<import("..").Chat>) => import("..").Chat;
    createChatBuilder: (params?: {
        chat?: import("..").Chat;
        messages?: Record<string, import("..").ChatMessage>;
    }) => {
        update: (updater: import("./ChatUpdater").ChatUpdater) => any;
        removeMessage: (messageId: string) => any;
        updateMessage: (messageId: string, updater: (message: import("..").ChatMessage | undefined) => import("..").ChatMessage | undefined) => import("..").ChatMessage | undefined;
        insertMessage: ({ targetId, draft, }: {
            targetId: string | undefined;
            draft: Partial<import("..").ChatMessage>;
        }) => any;
        addMessage: (draft: Partial<import("..").ChatMessage>) => import("..").ChatMessage;
        addMessageAtTop: (draft: Partial<import("..").ChatMessage>) => import("..").ChatMessage;
        get: () => {
            readonly chat: import("..").Chat;
            readonly messages: Record<string, import("..").ChatMessage>;
        };
        getDirty: () => string[];
        getDeletes: () => string[];
        getCurrentMessage: () => import("..").ChatMessage;
    };
    listChatMessages: ({ messages, messageId, acc, }: {
        messages: import("..").ChatMessage[];
        messageId: string | undefined;
        acc?: import("..").ChatMessage[];
    }) => import("..").ChatMessage[];
    DEFAULT_STOP: string[];
    DEFAULT_STOP_AFTER: never[];
    chatMessagesToPromptTextsChatML: ({ messages, characters, messageTemplate, }: {
        characters?: Record<string, import("..").AppCharacter | undefined>;
        messages: import("..").ChatMessage[];
        messageTemplate?: import("./ChatMessageTemplate").ChatMessageTemplate;
    }) => import("./PromptText").PromptText[];
    chatMessagesToOpenRouterMessages: ({ messages, characters, }: {
        characters?: Record<string, import("..").AppCharacter | undefined>;
        messages: import("..").ChatMessage[];
    }) => import("..").OpenRouterMessage[];
    chatMessagesToGoogleVertexMessages: ({ messages, characters, }: {
        characters?: Record<string, import("..").AppCharacter | undefined>;
        messages: import("..").ChatMessage[];
    }) => import("..").Content[];
    chatMessageToText: (message: import("..").ChatMessage) => string;
    chatStateEntriesToFacts: (chatDatas: Readonly<import("..").ChatStateEntry[]>) => Readonly<Record<string, string | undefined>>;
    chatStateEntriesToDecoratedFacts: (chatDatas: Readonly<import("..").ChatStateEntry[]>) => Record<string, import("..").AiplDecoratedValue<string | undefined>>;
};
//# sourceMappingURL=Chats.d.ts.map