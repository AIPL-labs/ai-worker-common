// import { addChatText } from "./addChatText";
import { DEFAULT_STOP, DEFAULT_STOP_AFTER } from "./DEFAULT_STOP";
import { chatMessagesToPromptTextsChatML } from "./chatMessagesToPromptTextsChatML";
import { createChat } from "./createChat";
import { createChatBuilder } from "./createChatBuilder";
import { listChatMessages } from "./listChatMessages";

export const Chats = {
  // side effect free
  createChat,
  createChatBuilder,
  listChatMessages,
  DEFAULT_STOP,
  DEFAULT_STOP_AFTER,
  chatMessagesToPromptTextsChatML,
  // React specific
  // useChat,
  // useChatMessage,
  // useChatMessages,

  // heavy side effects,
  // and/or rely on state
  // startChat,
  // addChatMessage,
  // addChatText,
  // getChatMessage,
  // getChatMessages,
  // insertChatMessage,
  // replaceMessage,
  // setChatMessage,

  // updateChat,
  // updateChatMesasgeText,
  // updateChatMessage,
};
