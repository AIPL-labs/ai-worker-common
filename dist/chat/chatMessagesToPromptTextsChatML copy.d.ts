import type { OpenRouterMessage } from "../3rd/open-router/OpenRouterTextgenRequest";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatMessageTemplate } from "./ChatMessageTemplate";
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    messageTemplate?: ChatMessageTemplate;
}) => OpenRouterMessage[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML%20copy.d.ts.map