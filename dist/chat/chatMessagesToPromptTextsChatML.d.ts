import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
export type PromptText = {
    text: string;
    role: "user" | "system" | "assistant";
};
export type ChatMessageTemplate = {
    messageStart: string;
    messageEnd: string;
    afterCharPostfix: string;
};
export declare const CHAT_ML_TEMPLATE: ChatMessageTemplate;
export declare const OPENCHAT_TEMPLATE: ChatMessageTemplate;
export declare const PLAY_TEMPLATE: ChatMessageTemplate;
export declare const DEFAULT_CHAT_MESSAGE_TEMPLATE: ChatMessageTemplate;
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, facts, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    facts?: Record<string, string | undefined> | undefined;
    messageTemplate?: ChatMessageTemplate | undefined;
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map