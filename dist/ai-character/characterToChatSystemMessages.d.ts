import { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import { AppCharacter, AppCharacterFieldName } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatMessageTemplate } from "../chat/ChatMessageTemplate";
import { AiplContext } from "../aipl/runtime/AiplContext";
export declare const characterToChatSystemMessages: ({ systemName, character, fieldNameToAiplContext, aiFunctions, messageTemplate, }: {
    systemName: string;
    character: AppCharacter;
    aiFunctions: AiFunctionDescription[];
    fieldNameToAiplContext: (filedName: AppCharacterFieldName) => AiplContext;
    messageTemplate?: ChatMessageTemplate | undefined;
}) => ChatMessage[];
//# sourceMappingURL=characterToChatSystemMessages.d.ts.map