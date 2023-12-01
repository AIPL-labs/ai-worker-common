import { AiAgent as AiAgent } from "../ai-agent/AiBot";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { AppUser, AppUserProfile } from "../user/AppUser";

export type AppObjectTypeMapping = {
  chat: Chat;
  "chat-message": ChatMessage;
  "ai-character": AiCharacter;
  "ai-agent": AiAgent;
  user: AppUser;
  "user-profile": AppUserProfile;
};

export type AppObjectType = keyof AppObjectTypeMapping;

export type AppObject<T extends AppObjectType = AppObjectType> =
  AppObjectTypeMapping[T];

export const APP_OBJECT_TYPES: AppObjectType[] = [
  "chat",
  "chat-message",
  "ai-character",
  "ai-agent",
  "user",
  "user-profile",
];

export const isAppObjectType = (maybe: unknown): maybe is AppObjectType => {
  const straw = maybe as AppObjectType;
  return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
