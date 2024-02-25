import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
export type PromptText = {
    text: string;
    role: "user" | "system" | "assistant";
};
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, facts, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    facts?: Record<string, string | undefined> | undefined;
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map