// import { uniqueId } from "ai-worker-common";
// import { Chat } from "./Chat";
// import { ChatMessage } from "./ChatMessage";
// import { createChatMessage } from "./createChatMessage";
// import { updateMessagesState } from "./MessagesState";
// import { getAppState } from "../state/AppState";
// import { DEFAULT_STOP, DEFAULT_STOP_AFTER } from "./DEFAULT_STOP";
// import { DataIndexesStates } from "../backend/index/state/DataIndexesStates";
import { uniqueId } from "../id/uniqueId";
import { DEFAULT_STOP, DEFAULT_STOP_AFTER } from "./DEFAULT_STOP";
export const createChat = (draft = {}) => {
    const { name, userName = "User", aiName = "AI", systemName = "system", maxResponseTokens = 1024, aiCharacterId, userCharacterId, tags = [], 
    // messageIds = [],
    currentMessageId, // TODO what if already currentMessage?
    id = uniqueId("chat"), vectorStoreIds, stop = DEFAULT_STOP, stopAfter = DEFAULT_STOP_AFTER, creation = Date.now(), 
    // messageIdxId = uniqueId("data-index"),
    modification = Date.now(), maxContextTokens = 16 * 1024, minResponseTokens = 128, } = draft;
    return {
        stopAfter,
        stop,
        tags,
        currentMessageId,
        id,
        name,
        creation,
        // messageIdxId,
        modification,
        userName,
        aiName,
        systemName,
        maxResponseTokens,
        aiCharacterId,
        userCharacterId,
        vectorStoreIds,
        maxContextTokens,
        minResponseTokens,
    };
};
//# sourceMappingURL=createChat.js.map