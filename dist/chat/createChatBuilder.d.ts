import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
import { ChatUpdater } from "./ChatUpdater";
export declare const createChatBuilder: (params?: {
    chat?: Chat;
    messages?: Record<string, ChatMessage>;
}) => {
    update: (updater: ChatUpdater) => any;
    removeMessage: (messageId: string) => any;
    updateMessage: (messageId: string, updater: (message: ChatMessage | undefined) => ChatMessage | undefined) => ChatMessage | undefined;
    insertMessage: ({ targetId, draft, }: {
        targetId: string | undefined;
        draft: Partial<ChatMessage>;
    }) => any;
    addMessage: (draft: Partial<ChatMessage>) => ChatMessage;
    addMessageAtTop: (draft: Partial<ChatMessage>) => ChatMessage;
    get: () => {
        readonly chat: Chat;
        readonly messages: Record<string, ChatMessage>;
    };
    getDirty: () => string[];
    getDeletes: () => string[];
    getCurrentMessage: () => ChatMessage;
};
//# sourceMappingURL=createChatBuilder.d.ts.map