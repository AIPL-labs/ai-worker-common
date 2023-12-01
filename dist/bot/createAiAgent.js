import { uniqueId } from "../id/uniqueId";
export const createAiAgent = (draft = {}) => {
    const { id = uniqueId("ai-agent"), name = "Helpful AI Agent", chatIds = [], aiCharacterId, userCharacterId, } = draft;
    return {
        id,
        name,
        aiCharacterId,
        chatIds,
        userCharacterId,
    };
};
//# sourceMappingURL=createAiAgent.js.map