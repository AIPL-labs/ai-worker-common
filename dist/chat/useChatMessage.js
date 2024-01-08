import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const useChatMessage = (chat, messageId) => {
    const idx = DataIndexesStates.getDataIndexState(chat.messageIdxId);
    if (!idx) {
        return undefined;
    }
    return idx.records[messageId];
};
//# sourceMappingURL=useChatMessage.js.map