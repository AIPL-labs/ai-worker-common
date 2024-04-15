// get a historical list of nodes

import type { ChatMessage } from "../type/chat-message/ChatMessage";

export const listChatMessages = ({
  messages,
  messageId,
  acc = [],
}: {
  messages: ChatMessage[];
  messageId: string | undefined;
  acc?: ChatMessage[];
}): ChatMessage[] => {
  if (!messageId) {
    return acc;
  }
  // const message = messages[messageId];
  const message = messages.find((m) => m.id === messageId);
  if (!message) {
    return acc;
  }
  return listChatMessages({
    messages,
    messageId: message.parent,
    acc: [message, ...acc],
  });
};
