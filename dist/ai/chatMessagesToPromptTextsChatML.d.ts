import { ChatMessage } from "../type/chat-message/ChatMessage";
export type PromptText = {
    text: string;
    role: "user" | "system" | "assistant";
};
export declare const chatMessagesToPromptTextsChatML: (messages: ChatMessage[]) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map