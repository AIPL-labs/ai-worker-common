import { Objects, isUndefined } from "@mjtdev/engine";
import { AppObjects } from "../app-object/AppObjects";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatBuilder } from "./ChatBuilder";
import { setChatMessage } from "./setChatMessage";
import { addChatMessage } from "./addChatMessage";

export const addChatMessageAtTop = ({
  draft,
  builder,
}: {
  builder: ChatBuilder;
  draft: Partial<ChatMessage>;
}): ChatMessage => {
  const { messages } = builder.get();
  const topMessage = Objects.values(messages).find((m) =>
    isUndefined(m.parent)
  );
  if (!topMessage) {
    return addChatMessage({ draft, builder });
  }
  const message = AppObjects.create("chat-message", {
    ...draft,
  });
  setChatMessage({ message, builder });
  setChatMessage({ message: { ...topMessage, parent: message.id }, builder });
  return message;
};
