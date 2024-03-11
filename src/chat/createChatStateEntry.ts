import { uniqueId } from "../id/uniqueId";
import { ChatStateEntry } from "../type/chat-message/ChatMessage";

export const createChatStateEntry = (
  draft: Partial<ChatStateEntry> = {}
): ChatStateEntry => {
  const {
    id = uniqueId("chat-state-entry"),
    namespace,
    type,
    key,
    node,
    value,
    contextName,
  } = draft;

  return { id, namespace, type, key, node, value, contextName };
};
