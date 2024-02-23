import { uniqueId } from "../id/uniqueId";
export const createChatData = (draft = {}) => {
    const { id = uniqueId("chat-data"), name, type, values } = draft;
    return { id, name, type, values };
};
//# sourceMappingURL=createChatData.js.map