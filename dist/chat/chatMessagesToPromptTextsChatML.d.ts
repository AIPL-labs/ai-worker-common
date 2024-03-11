import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatMessageTemplate } from "./ChatMessageTemplate";
import { PromptText } from "./PromptText";
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    messageTemplate?: ChatMessageTemplate | undefined;
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map