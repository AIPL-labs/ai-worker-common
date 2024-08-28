import type { OpenRouterMessage } from "../3rd/open-router/OpenRouterTextgenRequest";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatMessageTemplate } from "./ChatMessageTemplate";
export declare const chatMessagesToOpenRouterMessages: ({ messages, characters, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    messageTemplate?: ChatMessageTemplate;
}) => OpenRouterMessage[];
//# sourceMappingURL=chatMessagesToOpenRouterMessages%20copy.d.ts.map