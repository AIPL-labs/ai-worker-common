import { Objects } from "@mjtdev/engine";
import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
export const useChatMessages = (chat) => {
    const idx = DataIndexesStates.useDataIndexState(chat.messageIdxId);
    if (!idx) {
        return [];
    }
    return Objects.values(idx.records);
};
//# sourceMappingURL=useChatMessages.js.map