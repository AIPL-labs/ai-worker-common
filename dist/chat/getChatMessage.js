import { getChatMessages } from "./getChatMessages";
export const getChatMessage = (chat, messageId) => {
    if (!messageId) {
        return undefined;
    }
    return getChatMessages(chat)[messageId];
};
//# sourceMappingURL=getChatMessage.js.map