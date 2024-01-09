import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
import { ChatBuilder } from "./ChatBuilder";
export declare const setChatMessage: ({ chat, message, builder, }: {
    builder: ChatBuilder;
    chat: Chat;
    message: ChatMessage;
}) => {
    update: (updater: import("./ChatUpdater").ChatUpdater) => any;
    updateMessage: (messageId: string, updater: (message: ChatMessage | undefined) => ChatMessage | undefined) => ChatMessage | undefined;
    addMessage: (draft: Partial<ChatMessage>) => ChatMessage;
    get: () => {
        readonly chat: Chat;
        readonly messages: Record<string, ChatMessage>;
    };
    getDirty: () => string[];
    getCurrentMessage: () => ChatMessage;
};
//# sourceMappingURL=setChatMessage.d.ts.map