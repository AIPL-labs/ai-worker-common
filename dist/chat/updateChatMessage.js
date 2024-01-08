import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const updateChatMessage = (chat, messageId, updater) => {
    return DataIndexesStates.updateDataIndexStateRecord(chat.messageIdxId, messageId, updater);
};
//# sourceMappingURL=updateChatMessage.js.map