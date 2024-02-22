import { DEFAULT_STOP, DEFAULT_STOP_AFTER } from "./DEFAULT_STOP";
import { chatMessageToText } from "./chatMessageToText";
import { chatMessagesToPromptTextsChatML } from "./chatMessagesToPromptTextsChatML";
import { createChat } from "./createChat";
import { createChatBuilder } from "./createChatBuilder";
import { listChatMessages } from "./listChatMessages";

export const Chats = {
  createChat,
  createChatBuilder,
  listChatMessages,
  DEFAULT_STOP,
  DEFAULT_STOP_AFTER,
  chatMessagesToPromptTextsChatML,
  chatMessageToText
};
