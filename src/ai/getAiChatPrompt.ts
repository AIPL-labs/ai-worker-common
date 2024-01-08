import { Chats } from "../chat/Chats";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
import { chatMessagesToPromptTextsChatML } from "./chatMessagesToPromptTextsChatML";
import { condenseToFitBudget } from "./condenseToFitBudget";

export const getAiChatPrompt = ({
  chat,
  currentNodeId = chat.currentMessageId,
  tokenBudget = 4096,
  charactersBudget = 4096 * 8,
  messages,
}: {
  tokenBudget?: number;
  charactersBudget?: number;
  chat: Readonly<Chat>;
  currentNodeId?: string;
  messages: ChatMessage[];
}) => {
  const orderedMessages = Chats.listChatMessages({
    messages,
    messageId: currentNodeId,
  });
  const messageTexts = chatMessagesToPromptTextsChatML(orderedMessages);
  return condenseToFitBudget(messageTexts, tokenBudget, charactersBudget);
};
