import type { TextExtraction } from "type/corpus/TextExtraction";
import type { AccessPoint } from "../access/AccessPoint";
import type { AiFunctionCall } from "../ai-function/AiFunctions";
import type { AppCharacter } from "../app-character/AppCharacter";
import type { AppInterface } from "../app-interface/AppInterface";
import type {
  ChatMessage,
  ChatStarter,
  ChatStateEntry,
  FunctionCallResult,
} from "../chat-message/ChatMessage";
import type { Chat } from "../chat/Chat";
import type { Corpus, CorpusDocument } from "../corpus/Corpus";
import type { DataIndex } from "../data-index/DataIndex";
import type { AppGroup } from "../group/AppGroup";
import type { PhoneCall } from "../phone/PhoneCall";
import type { IngestResult } from "../rest/IngestRequest";
import type { AccessPointTheme } from "../theme/AccessPointTheme";
import type { Thought } from "../thought/Thought";
import type { AppUser, AppUserProfile } from "../user/AppUser";
import type { AppVoice } from "../voice/AppVoice";
import type { AppWebsocket } from "../app-websocket/AppWebsocket";
import type {
  AppService,
  AppServiceNode,
  AppServiceProvider,
} from "../app-service/AppService";
import type { AppVideo } from "../app-video/AppVideo";

export type AppObjectTypeMap = {
  chat: Chat;
  "chat-message": ChatMessage;
  "app-character": AppCharacter;
  "app-user": AppUser;
  "user-profile": AppUserProfile;
  corpus: Corpus;
  "corpus-document": CorpusDocument;
  "data-index": DataIndex;
  // data: ByteLike;
  voice: AppVoice;
  "text-extraction": TextExtraction;
  "ingest-result": IngestResult;
  "phone-call": PhoneCall;
  thought: Thought;
  "access-point": AccessPoint;
  "access-point-theme": AccessPointTheme;
  "app-interface": AppInterface;
  "app-group": AppGroup;
  "function-call": AiFunctionCall;
  "function-call-result": FunctionCallResult;
  "chat-state-entry": ChatStateEntry;
  "app-websocket": AppWebsocket;
  "app-service": AppService;
  "app-service-node": AppServiceNode;
  "app-service-provider": AppServiceProvider;
  "chat-starter": ChatStarter;
  "app-video": AppVideo;
};

export type AppObjectType = keyof AppObjectTypeMap;

export type AppObject<T extends AppObjectType = AppObjectType> =
  AppObjectTypeMap[T];

export const APP_OBJECT_TYPES: AppObjectType[] = [
  "chat",
  "chat-message",
  "app-character",
  "app-user",
  "user-profile",
  "corpus",
  "corpus-document",
  "data-index",
  // "data",
  "voice",
  "text-extraction",
  "ingest-result",
  "phone-call",
  "thought",
  "access-point",
  "access-point-theme",
  "app-interface",
  "app-group",
  "function-call",
  "chat-state-entry",
  "app-websocket",
];

export const isAppObjectType = (maybe: unknown): maybe is AppObjectType => {
  const straw = maybe as AppObjectType;
  return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
