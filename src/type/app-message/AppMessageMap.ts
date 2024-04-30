import type { PhoneCall } from "type/phone/PhoneCall";
import type { ElevenLabsWebsocketResult } from "../../3rd/elevenlabs/ElevenLabsWebsocketResult";
import type { SdApiTxt2ImgRequest } from "../../3rd/sdapi";
import type { CrawlParams } from "../../crawl/CrawlParams";
import type { AiFunctionCall } from "../ai-function/AiFunctions";
import type { AppObjectType } from "../app/AppObject";
import type { ChatMessage } from "../chat-message/ChatMessage";
import type { Chat } from "../chat/Chat";
import type { DataLink, DataObject } from "../data/DataObject";
import type { IngestRequest } from "../rest/IngestRequest";
import type { UserLoginRequest } from "../rest/UserLoginRequest";
import type { AppMessage } from "./AppMessage";
import type { AppCharacter } from "../app-character/AppCharacter";

export type MessageChunk = {
  id: string;
  idx: number;
  total: number;
  chunk: string;
};

export type AbortableMessageDetail = { abortId: string };
export const isAbortableMessageDetail = (
  maybe: unknown
): maybe is AbortableMessageDetail => {
  const straw = maybe as AbortableMessageDetail;
  return typeof straw === "object" && typeof straw.abortId === "string";
};

export type ReturnableMessageDetail = { returnId: string };
export const isReturnableMessageDetail = (
  maybe: unknown
): maybe is ReturnableMessageDetail => {
  const straw = maybe as ReturnableMessageDetail;
  return typeof straw === "object" && typeof straw.returnId === "string";
};

export type StreamableMessageDetail = { streamId: string };
export const isStreamableMessageDetail = (
  maybe: unknown
): maybe is StreamableMessageDetail => {
  const straw = maybe as StreamableMessageDetail;
  return typeof straw === "object" && typeof straw.streamId === "string";
};

export type InteractiveMessageDetail = AbortableMessageDetail &
  ReturnableMessageDetail &
  StreamableMessageDetail;

export type AppMessageMap = {
  auth:
    | string
    | {
        userName?: string;
        password?: string;
        gisCredential?: string;
      };
  access: string;
  ping: string;
  abort: string; // abortId
  // error: string;
  toast: string;
  log: {
    message?: string;
    extra?: unknown;
    stack?: string;
    cause?: unknown;
    level?: "info" | "debug" | "error" | "trace";
  };
  "appInterface:update": Partial<{
    ttsEnabled: boolean;
    gisClientId: string;
  }>;
  "appInterface:ready": unknown;
  "return:dataObject": DataObject;
  "chat:debug": { prompt: string; facts: Record<string, string | undefined> };
  "chat:phone": { phoneCall: Partial<PhoneCall>; chat: Partial<Chat> };
  "chat:start": Partial<Chat>;
  "chat:end": string;
  "chat:startPublicAgent": {
    accessPointId: string;
    params: Record<string, string>;
  };
  "chat:addMessage": Partial<AbortableMessageDetail> & {
    chatId: string;
    baseUrl?: string;
    authToken?: string;
    model?: string;
    contextSize?: number;
    message: Partial<ChatMessage>;
  };
  "chat:reInferMessage": {
    chatId: string;
    messageId: string | undefined;
  };
  "chat:insertMessage": {
    chatId: string;
    targetId: string | undefined;
    message: Partial<ChatMessage>;
  };
  "chat:deleteMessage": {
    chatId: string;
    messageId: string;
  };
  "chat:ask": Partial<
    InteractiveMessageDetail & {
      chatId?: string;
      stopAfter?: string;
      stop?: string | string[];
      maxResponseTokens?: number;
      systemMessage?: string;
      userMessage?: string;
      assistantMessage?: string;
    }
  >;

  ingest: IngestRequest;
  "vector:deleteNamespace": string | string[];

  "image:generate": Partial<AbortableMessageDetail> &
    ReturnableMessageDetail & { request: Partial<SdApiTxt2ImgRequest> };

  tts: { text: string; voiceId?: string };
  "tts:elevenlabs:result": ElevenLabsWebsocketResult & { mediaType: string };
  "tts:finished": void;
  "tts:say": { text: string; character: AppCharacter };
  "corpusDocument:delete": string | string[];

  messages: AppMessage[];

  "dataObject:sub": string | string[];
  "dataObject:unsub": string | string[];

  "dataObject:update": DataObject | DataObject[];
  "dataObject:murmur": DataObject | DataObject[];
  "dataObject:delete": string | string[];
  "dataObject:find": string | string[];
  "dataObject:findAllByObjectType": AppObjectType | AppObjectType[];

  "dataLink:find": {
    parentId: string;
    objectType?: AppObjectType;
    key?: string;
  };

  "dataLink:upsert": DataLink;

  "dataLink:delete": Partial<DataLink>;
  "service:state": {
    service: "llm" | "tts" | "vector" | "extract" | "imagegen";
    state: "busy" | "ready";
  };

  webCrawl: CrawlParams & {
    parentId: string;
  };
  "user:create": UserLoginRequest & {
    accessToken?: string;
    groups: string[];
    publicName?: string;
  };
  "user:delete": string | string[];
  "user:groupAdd": string | string[];
  "user:groupRemove": string | string[];
  "user:changePassword": { userId: string; password: string };

  "function:call": AiFunctionCall;
  "message:chunk": MessageChunk;
  "stat:get": Partial<{
    namespace: string;
    key: string;
  }>;
  "app:upgrade": unknown;
  "app:setAlarm": number;
};
