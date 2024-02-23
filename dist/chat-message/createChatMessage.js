import { uniqueId } from "../id/uniqueId";
export const createChatMessage = (draft) => {
    const { id = uniqueId("chat-message"), name, role = "user", content = { type: "text", parts: [] }, createTime = Date.now(), updateTime = Date.now(), metadata = {}, parent, characterId, disabled, status = "created",
    // functionResults,
     } = draft;
    // console.log(`${characterId} ${name} ${JSON.stringify(content)}`);
    return {
        id,
        characterId,
        disabled,
        role,
        name,
        content,
        createTime,
        metadata,
        parent,
        status,
        updateTime,
        // functionResults,
    };
};
//# sourceMappingURL=createChatMessage.js.map