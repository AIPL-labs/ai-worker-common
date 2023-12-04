import { StateUpdater } from "@mjtdev/engine";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";

export type AiFunctionCtx = {
  chatId?: string;
  characterId?: string;
  messageId?: string;
  env: {
    getChatById: (id: string) => Chat | undefined;
    getMessageById: (id: string) => ChatMessage | undefined;
    getCharacterById: (id: string) => AiCharacter | undefined;
    updateChat: StateUpdater<Chat>;
    updateMessages: StateUpdater<{ messages: Record<string, ChatMessage> }>;
    updateCharacters: StateUpdater<{ messages: Record<string, AiCharacter> }>;
  } & Record<string, unknown>;
};

export type AiFunction = (params: AiFunctionCtx) => void;
