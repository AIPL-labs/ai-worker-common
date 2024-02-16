import { Objects } from "@mjtdev/engine";
import { AppObjects } from "../app-object/AppObjects";
import { addChatMessage } from "./addChatMessage";
import { addChatMessageAtTop } from "./addChatMessageAtTop";
import { setChatMessage } from "./setChatMessage";
export const createChatBuilder = (params = {}) => {
    let { chat: curChat = AppObjects.create("chat"), messages: curMessages = {}, } = params;
    const dirty = new Set();
    const deletes = new Set();
    const builder = {
        update: (updater) => {
            updater(curChat, curMessages);
            return builder;
        },
        removeMessage: (messageId) => {
            const message = curMessages[messageId];
            if (!message) {
                return builder;
            }
            const children = Objects.values(curMessages).filter((m) => m.parent === message.id);
            for (const child of children) {
                builder.updateMessage(child.id, (c) => {
                    if (!c) {
                        return c;
                    }
                    return {
                        ...c,
                        parent: message.parent,
                    };
                });
                dirty.delete(messageId);
                delete curMessages[messageId];
            }
            deletes.add(messageId);
            if (curChat.currentMessageId === messageId) {
                builder.update((c) => {
                    c.currentMessageId = message.parent;
                    c.modification = Date.now();
                });
            }
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
        insertMessage: ({ targetId, draft, }) => {
            const targetChildren = Objects.values(curMessages).filter((m) => m.parent === targetId);
            const targetMessage = targetId ? curMessages[targetId] : undefined;
            const message = AppObjects.create("chat-message", {
                ...draft,
                parent: targetMessage?.parent,
            });
            setChatMessage({
                message,
                builder,
            });
            dirty.add(message.id);
            for (const child of targetChildren) {
                child.parent = message.id;
                setChatMessage({ message: child, builder });
                dirty.add(child.id);
            }
            if (curChat.currentMessageId === targetId) {
                builder.update((c) => {
                    c.currentMessageId = message.id;
                    c.modification = Date.now();
                });
            }
            return builder;
        },
        addMessage: (draft) => {
            const message = addChatMessage({ draft, builder });
            dirty.add(message.id);
            return message;
        },
        addMessageAtTop: (draft) => {
            const message = addChatMessageAtTop({ draft, builder });
            dirty.add(message.id);
            return message;
        },
        get: () => ({ chat: curChat, messages: curMessages }),
        getDirty: () => Array.from(dirty.values()),
        getDeletes: () => Array.from(deletes.values()),
        getCurrentMessage: () => curMessages[curChat.currentMessageId],
    };
    return builder;
};
//# sourceMappingURL=createChatBuilder.js.map