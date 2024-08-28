import { uniqueId } from "../id/uniqueId";
export const createChatStateEntry = (draft = {}) => {
    const { id = uniqueId("chat-state-entry"), namespace, type, key, node, value, contextName, } = draft;
    return { id, namespace, type, key, node, value, contextName };
};
//# sourceMappingURL=createChatStateEntry.js.map