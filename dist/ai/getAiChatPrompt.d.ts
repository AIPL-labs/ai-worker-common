import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
export declare const getAiChatPrompt: ({ chat, currentNodeId, tokenBudget, charactersBudget, messages, }: {
    tokenBudget?: number | undefined;
    charactersBudget?: number | undefined;
    chat: Readonly<Chat>;
    currentNodeId?: string | undefined;
    messages: ChatMessage[];
}) => string;
//# sourceMappingURL=getAiChatPrompt.d.ts.map