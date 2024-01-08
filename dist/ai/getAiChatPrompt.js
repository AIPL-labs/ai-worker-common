import { Chats } from "../chat/Chats";
import { chatMessagesToPromptTextsChatML } from "./chatMessagesToPromptTextsChatML";
import { condenseToFitBudget } from "./condenseToFitBudget";
export const getAiChatPrompt = ({ chat, currentNodeId = chat.currentMessageId, tokenBudget = 4096, charactersBudget = 4096 * 8, messages, }) => {
    const orderedMessages = Chats.listChatMessages({
        messages,
        messageId: currentNodeId,
    });
    const messageTexts = chatMessagesToPromptTextsChatML(orderedMessages);
    return condenseToFitBudget(messageTexts, tokenBudget, charactersBudget);
};
//# sourceMappingURL=getAiChatPrompt.js.map