import type { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import type { AppCharacter, AppCharacterFieldName, ToolConfig } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatMessageTemplate } from "../chat/ChatMessageTemplate";
import type { AiplContext } from "../aipl/runtime/AiplContext";
export declare const characterToChatSystemMessages: ({ systemName, character, fieldNameToAiplContext, aiFunctions, messageTemplate, toolConfigCurrent, typeName, }: {
    systemName: string;
    character: AppCharacter;
    aiFunctions: AiFunctionDescription[];
    fieldNameToAiplContext: (filedName: AppCharacterFieldName) => AiplContext;
    messageTemplate?: ChatMessageTemplate;
    typeName?: string;
    toolConfigCurrent?: ToolConfig["current"];
}) => ChatMessage[];
//# sourceMappingURL=characterToChatSystemMessages.d.ts.map