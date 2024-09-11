import type { PhoneCall } from "type/phone/PhoneCall";
import type { ElevenLabsWebsocketResult } from "../../3rd/elevenlabs/ElevenLabsWebsocketResult";
import type { OpenRouterMessage } from "../../3rd/open-router/OpenRouterTextgenRequest";
import type {
  SdApiTxt2ImgRequest,
  SdApiTxt2ImgResponse,
} from "../../3rd/sdapi";
import type { CrawlParams } from "../../crawl/CrawlParams";
import type { AccessInfo } from "../access/AccessInfo";
import type { AiFunctionCall } from "../ai-function/AiFunctions";
import type {
  AppCharacter,
  FormSkillConfig,
  FormSkillConfigKeyValue,
  ToolConfig,
} from "../app-character/AppCharacter";
import type { AppObjectType } from "../app/AppObject";
import type { ChatMessage } from "../chat-message/ChatMessage";
import type { Chat } from "../chat/Chat";
import type { DataLink, DataObject } from "../data/DataObject";
import type { AppGroup } from "../group/AppGroup";
import type { IngestRequest } from "../rest/IngestRequest";
import type { UserLoginRequest } from "../rest/UserLoginRequest";
import type { AppMessage } from "./AppMessage";
import type { AsrResult, AsrWhisperSegment } from "../asr/AsrTypes";
import type { TypeInfo } from "@mjtdev/engine";

export type MessageChunk = {
  id: string;
  idx: number;
  total: number;
  chunk: ArrayBuffer;
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
    | (ReturnableMessageDetail & {
        userName?: string;
        password?: string;
        gisCredential?: string;
      });
  access: string;
  ping: string;
  play: ReturnableMessageDetail & { data: unknown };
  abort: string; // abortId
  // error: string;
  toast:
    | string
    | {
        message: string;
        type?: string;
      };
  log: {
    message?: string;
    extra?: unknown;
    stack?: string;
    cause?: unknown;
    level?: "info" | "debug" | "error" | "trace";
  };
  "app:invalidateCaches": void;

  "app:performance": {
    message?: string;
    location: string;
    scope?: string;
    start: number;
    end: number;
    delta: number;
    cumulative: number;
    timestamp: number;
    parent?: string;
    mark?: boolean;
    count?: number;
  };
  "app:metrics:get": ReturnableMessageDetail;
  "app:metrics:reset": undefined;
  "app:metrics:result": {
    metrics: Record<string, { count: number }>;
  };

  "app:debug:set": {
    perfEnabled: boolean;
    debugEnabled: boolean;
  };
  "app:time": Partial<ReturnableMessageDetail> & {
    epoch: number;
    perf: number;
    localDiff?: number;
  };

  "appInterface:update": Partial<{
    appInterfaceId: string;
    ttsEnabled: boolean;
    gisClientId: string;
  }>;
  "appInterface:ready": unknown;
  "return:dataObject": DataObject;
  return: { returnId: string; data: unknown };
  stream: { streamId: string; data: unknown };
  "chat:debug": {
    prompt?: string;
    messages?: OpenRouterMessage[];
    facts: Record<string, string | undefined>;
  };
  "chat:phone": { phoneCall: Partial<PhoneCall>; chat: Partial<Chat> };
  "chat:start": Partial<ReturnableMessageDetail> & Partial<Chat>;
  "chat:end": string;
  "chat:startPublicAgent": ReturnableMessageDetail & {
    accessPointId: string;
    params: Record<string, string>;
    schema?: TypeInfo<unknown>["schema"];
    systemMessage?: string;
  };
  "chat:addMessage": Partial<AbortableMessageDetail> & {
    chatId: string;
    baseUrl?: string;
    authToken?: string;
    model?: string;
    contextSize?: number;
    message: Partial<ChatMessage>;
    toolConfig?: ToolConfig;
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
      toolConfig?: ToolConfig;
    }
  >;

  ingest: IngestRequest;
  "vector:deleteNamespace": string | string[];

  "image:generate": Partial<AbortableMessageDetail> &
    ReturnableMessageDetail & { request: Partial<SdApiTxt2ImgRequest> };
  "image:response": SdApiTxt2ImgResponse | undefined;

  tts: { text: string; voiceId?: string };
  "tts:elevenlabs:result": ElevenLabsWebsocketResult & { mediaType: string };
  "tts:finished": void;
  "tts:say": { text: string; character: AppCharacter };
  "tts:txt2audio": ReturnableMessageDetail & {
    text: string;
    characterId: string;
  };
  "corpusDocument:delete": string | string[];

  messages: AppMessage[];

  "dataObject:sub": string | string[];
  "dataObject:unsub": string | string[];

  "dataObject:update": DataObject | DataObject[];
  "dataObject:update:accessInfo":
    | (DataObject & AccessInfo)
    | (DataObject & AccessInfo)[];
  "dataObject:get:accessInfo": ReturnableMessageDetail & { objectId: string };
  "dataObject:murmur": DataObject | DataObject[];
  "dataObject:delete": string | string[];
  "dataObject:find": string | string[];
  "dataObject:get": ReturnableMessageDetail & { id: string | string[] };
  "dataObject:getChildren": ReturnableMessageDetail & {
    parentId: string;
    objectType: AppObjectType;
    key?: string;
  };
  "dataObject:query": ReturnableMessageDetail & { query: string };
  "dataObject:query:getKeys": ReturnableMessageDetail;
  "dataObject:query:invalidate": string;
  "dataObject:query:setKeys": string[];
  "dataObject:swr:setDataForKey": {
    swrKey: string;
    data?: DataObject[];
  };

  "dataObject:updateChildren": {
    parentId: string;
    objectType: AppObjectType;
    key: string;
    children: DataObject[];
  };
  "dataObject:getByType": ReturnableMessageDetail & {
    objectType: AppObjectType | AppObjectType[];
  };
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
  // "user:groupAdd": string | string[];
  // "user:groupRemove": string | string[];
  "user:changePassword": { userId: string; password: string };

  "function:call": AiFunctionCall;
  "message:chunk": MessageChunk;
  "stat:get": Partial<{
    namespace: string;
    key: string;
  }>;
  "app:upgrade": unknown;
  "app:reset": unknown;
  "app:setAlarm": number;
  "app:group:create": ReturnableMessageDetail & { draft: Partial<AppGroup> };
  "app:group:activate": ReturnableMessageDetail & {
    subjectId: string;
    activeId: string;
  };
  "app:sessions:list": ReturnableMessageDetail & {
    query?: unknown;
  };
  "app:sessions:reset": ReturnableMessageDetail & {
    query?: unknown;
  };
  "asr:audio2txt": ReturnableMessageDetail & {
    audio: ArrayBuffer;
    mediaType: string;
  };
  "asr:response": AsrResult<AsrWhisperSegment>;
  "lipsync:request": ReturnableMessageDetail & {
    audio: ArrayBuffer;
    image: ArrayBuffer;
  };
  "lipsync:response": ReturnableMessageDetail & {
    out?: string;
    err?: string;
    video?: ArrayBuffer;
  };
  "app:su": {
    userId: string;
  };
  "aipl:getAvailableTransforms": ReturnableMessageDetail;
  "aipl:getAvailableTransforms:response": {
    transforms: readonly string[];
  };
  "aipl:exec": ReturnableMessageDetail &
    StreamableMessageDetail & {
      executionContextId?: string;
      program: string;
      params?: Record<string, string>;
    };
  "playground:createAssistant": ReturnableMessageDetail;
  "playground:createAssistant:result": {
    assistantCharacterId: string;
    userCharacterId: string;
    trueName: string;
  };

  "playground:suAssistant": ReturnableMessageDetail & {
    characterId: string;
    trueName: string;
  };
  "playground:updateAssistant": ReturnableMessageDetail & {
    trueName: string;
    draft: Partial<AppCharacter>;
  };
  "playground:deleteAssistant": ReturnableMessageDetail & {
    trueName: string;
    characterId: string;
  };
  "playground:search": ReturnableMessageDetail & {
    query: string;
  };
  "client:formUpdate": {
    data: unknown;
    config: FormSkillConfig;
  };
  "client:aiplComponentUpdate": {
    data: object;
  };
  "client:standbyNotice": {
    state: "start" | "end";
    progressRatio: number;
    message?: string;
  };
  "pap:auth": ReturnableMessageDetail & {
    accessPointId: string;
    params: Record<string, string>;
  };
};
