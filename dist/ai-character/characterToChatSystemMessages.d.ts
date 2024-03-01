import { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatMessageTemplate } from "../chat/chatMessagesToPromptTextsChatML";
export declare const characterToChatSystemMessages: ({ systemName, character, facts, aiFunctions, messageTemplate, }: {
    systemName: string;
    character: AppCharacter;
    aiFunctions: AiFunctionDescription[];
    facts: {
        char: string | undefined;
        user: string | undefined;
    };
    messageTemplate?: ChatMessageTemplate | undefined;
}) => ChatMessage[];
//# sourceMappingURL=characterToChatSystemMessages.d.ts.map