import { StateUpdater, createState } from "@mjtdev/engine";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";

export type AiFunctionCtx = {
  arg?: string;
  env: {
    getMessageById: (id: string) => ChatMessage | undefined;
    getCharacterById: (id: string) => AiCharacter | undefined;
    getChat: () => Chat;
    updateChat: StateUpdater<Chat>;
    updateMessages: StateUpdater<{ messages: Record<string, ChatMessage> }>;
    updateCharacters: StateUpdater<{ characters: Record<string, AiCharacter> }>;
  } & Record<string, unknown>;
};

// export type

export const [useAiFunctionState, updateAiFunctionState, getAiFunctionState] =
  createState({
    functions: {} as Record<string, AiFunctionInterface>,
  });

export type AiFunction = (ctx: AiFunctionCtx) => void;

export type AiFunctionParam = {
  name: string;
  description: string;
  type?: string;
};

export type AiFunctionDescription = {
  name: string;
  usage: string; // function for {usage}
  params?: AiFunctionParam | AiFunctionParam[];
};

export type AiFunctionInterface = AiFunctionDescription & { func?: AiFunction };
