import { AppObjects } from "../app-object/AppObjects";
import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
import { createChat } from "./createChat";
export const startChat = ({ userId }) => {
    const chat = createChat();
    const idx = AppObjects.create("data-index", {
        id: chat.messageIdxId,
    });
    if (!idx) {
        return;
    }
    DataIndexesStates.setUserDataIndexStateRecord({
        userId,
        objectType: "chat",
        record: chat,
    });
    DataIndexesStates.setDataIndexState(idx);
    return chat;
};
//# sourceMappingURL=startChat.js.map