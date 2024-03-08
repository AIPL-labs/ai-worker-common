import { AiplContext } from "../aipl/runtime/AiplContext";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatMessageTemplate } from "./ChatMessageTemplate";
import { PromptText } from "./PromptText";
export declare const renderAiplProgramText: (programText: string, context: AiplContext) => string;
export declare const chatMessagesToPromptTextsChatML: ({ messages, characters, aiplContext, messageTemplate, }: {
    characters: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
    messageTemplate?: ChatMessageTemplate | undefined;
    aiplContext: AiplContext;
}) => PromptText[];
//# sourceMappingURL=chatMessagesToPromptTextsChatML.d.ts.map