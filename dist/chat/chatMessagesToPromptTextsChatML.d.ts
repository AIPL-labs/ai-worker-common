import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
export type PromptText = {
    text: string;
    role: "user" | "system" | "assistant";
};
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map