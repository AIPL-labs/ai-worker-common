import { TextExtraction } from "type/corpus/TextExtraction";
import { AppCharacter } from "../app-character/AppCharacter";
import { ChatMessage, FunctionCallResult } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { Corpus, CorpusDocument } from "../corpus/Corpus";
import { DataIndex } from "../data-index/DataIndex";
import { AppUser, AppUserProfile } from "../user/AppUser";
import { AppVoice } from "../voice/AppVoice";
import { IngestResult } from "../rest/IngestRequest";
import { PhoneCall } from "../phone/PhoneCall";
import { Thought } from "../thought/Thought";
import { AccessPoint } from "../access/AccessPoint";
import { AppInterface } from "../app-interface/AppInterface";
import { DataObject } from "../data/DataObject";
import { AccessPointTheme } from "../theme/AccessPointTheme";
import { AppGroup } from "../group/AppGroup";
import { AiFunctionCall } from "../ai-function/AiFunctions";

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
];

export const isAppObjectType = (maybe: unknown): maybe is AppObjectType => {
  const straw = maybe as AppObjectType;
  return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
