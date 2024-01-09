import { AppObjects } from "../app-object/AppObjects";
import { addChatMessage } from "./addChatMessage";
export const createChatBuilder = (params = {}) => {
    let { chat: curChat = AppObjects.create("chat"), messages: curMessages = {}, } = params;
    const dirty = new Set();
    const builder = {
        update: (updater) => {
            updater(curChat, curMessages);
            return builder;
        },
        updateMessage: (messageId, updater) => {
            dirty.add(messageId);
            const curMessage = curMessages[messageId];
            const updatedMessage = updater(curMessage);
            if (!updatedMessage) {
                delete curMessages[messageId];
                return undefined;
            }
            curMessages[messageId] = updatedMessage;
            return updatedMessage;
        },
        addMessage: (draft) => {
            const message = addChatMessage({ draft, builder });
            dirty.add(message.id);
            return message;
        },
        get: () => ({ chat: curChat, messages: curMessages }),
        getDirty: () => Array.from(dirty.values()),
        getCurrentMessage: () => curMessages[curChat.currentMessageId],
    };
    return builder;
};
//# sourceMappingURL=createChatBuilder.js.map