import { uniqueId } from "../id/uniqueId";
import type { ChatStarter } from "../type/chat-message/ChatMessage";

export const createChatStarter = (
  draft: Partial<ChatStarter> = {}
): ChatStarter => {
  const { id = uniqueId("chat-starter"), position, text } = draft;

  return { id, position, text };
};
