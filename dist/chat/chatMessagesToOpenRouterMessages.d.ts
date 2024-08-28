import type { OpenRouterMessage } from "../3rd/open-router/OpenRouterTextgenRequest";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
export declare const chatMessagesToOpenRouterMessages: ({ messages, characters, }: {
    characters?: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
}) => OpenRouterMessage[];
//# sourceMappingURL=chatMessagesToOpenRouterMessages.d.ts.map