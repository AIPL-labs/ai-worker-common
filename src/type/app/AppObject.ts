import { ByteLike } from "@mjtdev/engine";
import { AiAgent as AiAgent } from "../ai-agent/AiBot";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { Corpus, CorpusDocument } from "../corpus/Corpus";
import { DataIndex } from "../data-index/DataIndex";
import { AppUser, AppUserProfile } from "../user/AppUser";
import { AppVoice } from "../voice/AppVoice";
import { VectorStore } from "../vector-store/VectorStore";
import { IngestResult } from "../rest/IngestRequest";

export type AppObjectTypeMap = {
  chat: Chat;
  "chat-message": ChatMessage;
  "ai-character": AiCharacter;
  "ai-agent": AiAgent;
  user: AppUser;
  "user-profile": AppUserProfile;
  corpus: Corpus;
  "corpus-document": CorpusDocument;
  "data-index": DataIndex;
  // data: ByteLike;
  voice: AppVoice;
  "vector-store": VectorStore;
  "ingest-result": IngestResult;
};

export type AppObjectType = keyof AppObjectTypeMap;

export type AppObject<T extends AppObjectType = AppObjectType> =
  AppObjectTypeMap[T];

export const APP_OBJECT_TYPES: AppObjectType[] = [
  "chat",
  "chat-message",
  "ai-character",
  "ai-agent",
  "user",
  "user-profile",
  "corpus",
  "corpus-document",
  "data-index",
  // "data",
  "voice",
  "vector-store",
];

export const isAppObjectType = (maybe: unknown): maybe is AppObjectType => {
  const straw = maybe as AppObjectType;
  return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
