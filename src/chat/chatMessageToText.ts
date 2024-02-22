import { ChatMessage } from "../type/chat-message/ChatMessage";

export const chatMessageToText = (message: ChatMessage): string => {
  const type = message.content.type;
  if (type === "text") {
    return message.content.parts.join("");
  } else if (type === "audio") {
    return message.content.asrText ?? "";
  }

  throw new Error(
    `chatMessageToText: Unsupported message content type ${type}`
  );
};
