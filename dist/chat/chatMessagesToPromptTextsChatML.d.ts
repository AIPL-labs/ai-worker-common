import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatMessageTemplate } from "./ChatMessageTemplate";
import type { PromptText } from "./PromptText";
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    messageTemplate?: ChatMessageTemplate;
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map