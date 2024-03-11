export declare const Chats: {
    createChat: (draft?: Partial<import("..").Chat>) => import("..").Chat;
    createChatBuilder: (params?: {
        chat?: import("..").Chat | undefined;
        messages?: Record<string, import("..").ChatMessage> | undefined;
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
        acc?: import("..").ChatMessage[] | undefined;
    }) => import("..").ChatMessage[];
    DEFAULT_STOP: string[];
    DEFAULT_STOP_AFTER: never[];
    chatMessagesToPromptTextsChatML: ({ messages, characters, messageTemplate, }: {
        characters: Record<string, import("..").AppCharacter | undefined>;
        messages: import("..").ChatMessage[];
        messageTemplate?: import("./ChatMessageTemplate").ChatMessageTemplate | undefined;
    }) => import("./PromptText").PromptText[];
    chatMessageToText: (message: import("..").ChatMessage) => string;
    chatStateEntriesToFacts: (chatDatas: import("..").ChatStateEntry[]) => Record<string, string | undefined>;
    chatStateEntriesToDecoratedFacts: (chatDatas: import("..").ChatStateEntry[]) => Record<string, import("../aipl/runtime/AiplContext").AiplDecoratedValue<string | undefined>>;
};
//# sourceMappingURL=Chats.d.ts.map