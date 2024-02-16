import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
export declare const trimSmallTextToUndefined: (text: string | undefined) => string | undefined;
export declare const characterToChatSystemMessages: ({ systemName, character, facts, options, }: {
    systemName: string;
    character: AppCharacter;
    facts: {
        char: string | undefined;
        user: string | undefined;
    };
    options?: Partial<{
        startChatLinePrefix: string;
        afterCharPostfix: string;
        endChatLinePostfix: string;
    }> | undefined;
}) => ChatMessage[];
//# sourceMappingURL=characterToChatSystemMessages.d.ts.map