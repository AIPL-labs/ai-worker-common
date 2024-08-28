import type { ChatMessageTemplate } from "chat/ChatMessageTemplate";
import type { AiFunctionDescription } from "../type/ai-function/AiFunctions";
/** @deprecated this whole line of thought/code needs to be rewritten */
export declare const createAiFunctionPromptText: ({ aiName, userName, functions, messageTemplate: messageTemplate, }: {
    functions: AiFunctionDescription[];
    aiName: string;
    userName: string;
    messageTemplate?: ChatMessageTemplate;
}) => string | undefined;
//# sourceMappingURL=createAiFunctionPromptText.d.ts.map