import { updateChatMessage } from "./updateChatMessage";
export const updateChatMesasgeText = ({ chat, messageId, updater, }) => {
    updateChatMessage(chat, messageId, (message) => {
        const updated = updater(message.content.parts.join(""));
        message.content.parts = [updated];
    });
};
//# sourceMappingURL=updateChatMesasgeText.js.map