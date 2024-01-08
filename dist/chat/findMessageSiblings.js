import { Objects } from "@mjtdev/engine";
import { getChatMessages } from "./getChatMessages";
export const findMessageSiblings = ({ chat, messageId, }) => {
    const messages = getChatMessages(chat);
    const message = messages[messageId];
    return Objects.values(messages)
        .filter((m) => m.parent === message.parent && m.id !== messageId)
        .sort((a, b) => a.createTime - b.createTime);
};
//# sourceMappingURL=findMessageSiblings.js.map