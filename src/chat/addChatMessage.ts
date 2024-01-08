import { AppObjects } from "../app-object/AppObjects";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatBuilder } from "./ChatBuilder";
import { setChatMessage } from "./setChatMessage";

export const addChatMessage = ({
  draft,
  builder,
}: {
  builder: ChatBuilder;
  draft: Partial<ChatMessage>;
}): ChatMessage => {
  const { chat } = builder.get();
  const { currentMessageId, id } = chat;
  const message = AppObjects.create("chat-message", {
    ...draft,
    // chatId: id,
    parent: currentMessageId,
  });
  if (!message) {
    throw new Error("error creating chat message");
  }
  setChatMessage({ chat, message, builder });
  builder.update((c) => {
    c.currentMessageId = message.id;
    c.modification = Date.now();
  });
  return message;
};
