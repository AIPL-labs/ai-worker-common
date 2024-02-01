import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatBuilder } from "./ChatBuilder";
export declare const setChatMessage: ({ message, builder, }: {
    builder: ChatBuilder;
    message: ChatMessage;
}) => {
    update: (updater: import("./ChatUpdater").ChatUpdater) => any;
    removeMessage: (messageId: string) => any;
    updateMessage: (messageId: string, updater: (message: ChatMessage | undefined) => ChatMessage | undefined) => ChatMessage | undefined;
    addMessage: (draft: Partial<ChatMessage>) => ChatMessage;
    addMessageAtTop: (draft: Partial<ChatMessage>) => ChatMessage;
    get: () => {
        readonly chat: import("..").Chat;
        readonly messages: Record<string, ChatMessage>;
    };
    getDirty: () => string[];
    getCurrentMessage: () => ChatMessage;
};
//# sourceMappingURL=setChatMessage.d.ts.map