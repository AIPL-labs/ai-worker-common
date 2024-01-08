import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";

export type ChatUpdater = (
  chat: Chat,
  messages: Record<string, ChatMessage>
) => void
