import { uniqueId } from "../id/uniqueId";
import { ChatMessage } from "../type/chat-message/ChatMessage";

export const createChatMessage = (draft: Partial<ChatMessage>): ChatMessage => {
  const {
    id = uniqueId("chat-message"),
    name,
    role = "user",
    content = { type: "text", parts: [] },
    createTime = Date.now(),
    updateTime = Date.now(),
    metadata = {},
    parent,
    characterId,
    disabled,
    status = "created",
    functionResults,
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
    functionResults,
  };
};
