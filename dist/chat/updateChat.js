import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const updateChat = ({ chatId, updater, userId, }) => {
    return DataIndexesStates.updateUserDataIndexStateRecord({
        updater,
        objectType: "chat",
        recordId: chatId,
        userId,
    });
};
//# sourceMappingURL=updateChat.js.map