import { AppObject, AppObjectType } from "../app/AppObject";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { DataObject } from "../data/DataObject";
import { IngestRequest } from "../rest/IngestRequest";
import { AppMessage } from "./AppMessage";

export type AppMessageMap = {
  auth: string;
  ping: string;
  abort: string | undefined; // objectId to abort like chatId to abort generation or some other filter
  error: string;
  toast: string;
  "chat:start": Partial<Chat>;
  "chat:addMessage": {
    chatId: string;

    baseUrl?: string;
    authToken?: string;
    model?: string;

    message: Partial<ChatMessage>;
  };

  ingest: IngestRequest;
  "vector:delete": string | string[];

  tts: { text: string; voiceId?: string };
  "tts:finished": void;
  "corpusDocument:delete": string | string[];

  "chat:generateAiText": {
    chatId: string;
    baseUrl?: string;
    authToken?: string;
    model?: string;
    abortId?: string;
  };

  messages: AppMessage[];

  "dataObject:sub": string | string[];
  "dataObject:unsub": string | string[];

  "dataObject:update": DataObject;
  "dataObject:murmur": DataObject;
  "dataObject:delete": string | string[];

  "dataLink:find": {
    parentId: string;
    objectType?: AppObjectType;
  };

  "dataLink:update": {
    parentId: string;
    childId: string;
    objectType: AppObjectType;
  };

  "dataLink:delete": {
    parentId?: string;
    childId?: string;
    objectType?: AppObjectType;
  };
};
