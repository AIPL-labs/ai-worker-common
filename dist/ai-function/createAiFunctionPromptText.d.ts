import { ChatMessageTemplate } from "../chat/chatMessagesToPromptTextsChatML";
import { AiFunctionDescription } from "../type/ai-function/AiFunctions";
export declare const createAiFunctionPromptText: ({ aiName, userName, functions, messageTemplate: messageTemplate, }: {
    functions: AiFunctionDescription[];
    aiName: string;
    userName: string;
    messageTemplate?: ChatMessageTemplate | undefined;
}) => string | undefined;
//# sourceMappingURL=createAiFunctionPromptText.d.ts.map