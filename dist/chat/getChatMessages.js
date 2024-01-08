import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const getChatMessages = (chat) => {
    const idx = DataIndexesStates.getDataIndexState(chat.messageIdxId);
    if (!idx) {
        return {};
    }
    return idx.records;
};
//# sourceMappingURL=getChatMessages.js.map