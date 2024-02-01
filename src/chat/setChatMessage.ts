import { ChatMessage } from "../type/chat-message/ChatMessage";
import { ChatBuilder } from "./ChatBuilder";

export const setChatMessage = ({
  message,
  builder,
}: {
  builder: ChatBuilder;
  message: ChatMessage;
}) => {
  return builder.update((c, ms) => {
    ms[message.id] = message;
  });
};
