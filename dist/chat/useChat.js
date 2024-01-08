import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const useChat = ({ chatId, userId, }) => {
    return DataIndexesStates.useUserDataIndexStateRecord({
        userId,
        objectType: "chat",
        recordId: chatId,
    });
};
//# sourceMappingURL=useChat.js.map