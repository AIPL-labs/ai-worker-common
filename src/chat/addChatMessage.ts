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
  const { currentMessageId } = chat;
  const message = AppObjects.create("chat-message", {
    ...draft,
    parent: currentMessageId,
  });
  setChatMessage({ message, builder });
  builder.update((c) => {
    c.currentMessageId = message.id;
    c.modification = Date.now();
  });
  return message;
};
