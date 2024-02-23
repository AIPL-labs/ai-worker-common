import { uniqueId } from "../id/uniqueId";
import { ChatData } from "../type/chat-message/ChatMessage";

export const createChatData = (draft: Partial<ChatData> = {}): ChatData => {
  const { id = uniqueId("chat-data"), name, type, values } = draft;

  return { id, name, type, values };
};
