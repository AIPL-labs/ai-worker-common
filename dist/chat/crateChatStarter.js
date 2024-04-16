import { uniqueId } from "../id/uniqueId";
export const createChatStarter = (draft = {}) => {
    const { id = uniqueId("chat-starter"), position, text } = draft;
    return { id, position, text };
};
//# sourceMappingURL=crateChatStarter.js.map