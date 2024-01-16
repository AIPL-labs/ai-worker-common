export declare const Chats: {
    createChat: (draft?: Partial<import("..").Chat>) => import("..").Chat;
    createChatBuilder: (params?: {
        chat?: import("..").Chat | undefined;
        messages?: Record<string, import("..").ChatMessage> | undefined;
    }) => {
        update: (updater: import("./ChatUpdater").ChatUpdater) => any;
        removeMessage: (messageId: string) => any;
        updateMessage: (messageId: string, updater: (message: import("..").ChatMessage | undefined) => import("..").ChatMessage | undefined) => import("..").ChatMessage | undefined;
        addMessage: (draft: Partial<import("..").ChatMessage>) => import("..").ChatMessage;
        get: () => {
            readonly chat: import("..").Chat;
            readonly messages: Record<string, import("..").ChatMessage>;
        };
        getDirty: () => string[];
        getCurrentMessage: () => import("..").ChatMessage;
    };
    listChatMessages: ({ messages, messageId, acc, }: {
        messages: import("..").ChatMessage[];
        messageId: string | undefined;
        acc?: import("..").ChatMessage[] | undefined;
    }) => import("..").ChatMessage[];
    DEFAULT_STOP: string[];
};
//# sourceMappingURL=Chats.d.ts.map