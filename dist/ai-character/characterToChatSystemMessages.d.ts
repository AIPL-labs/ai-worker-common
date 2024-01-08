import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
export declare const characterToChatSystemMessages: ({ systemName, character, facts, }: {
    systemName: string;
    character: AppCharacter;
    facts: {
        char: string | undefined;
        user: string | undefined;
    };
}) => ChatMessage[];
//# sourceMappingURL=characterToChatSystemMessages.d.ts.map