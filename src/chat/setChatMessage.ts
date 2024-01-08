import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
import { ChatBuilder } from "./ChatBuilder";

export const setChatMessage = ({
  chat,
  message,
  builder,
}: {
  builder: ChatBuilder;
  chat: Chat;
  message: ChatMessage;
}) => {
  return builder.update((c, ms) => {
    ms[message.id] = message;
  });

  // return DataIndexesStates.setDataIndexStateRecord(chat.messageIdxId, message);
};
