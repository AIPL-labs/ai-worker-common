import { PhoneCall } from "type/phone/PhoneCall";
import { CrawlParams } from "../../crawl/CrawlParams";
import { AppObjectType } from "../app/AppObject";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { DataLink, DataObject } from "../data/DataObject";
import { IngestRequest } from "../rest/IngestRequest";
import { UserLoginRequest } from "../rest/UserLoginRequest";
import { AppMessage } from "./AppMessage";
import { AiFunctionCall } from "../ai-function/AiFunctions";

export type AppMessageMap = {
  auth: string;
  access: string;
  ping: string;
  abort: string | undefined; // objectId to abort like chatId to abort generation or some other filter
  error: string;
  toast: string;
  log: string;
  "return:dataObject": DataObject;
  "chat:phone": { phoneCall: Partial<PhoneCall>; chat: Partial<Chat> };
  "chat:start": Partial<Chat>;
  "chat:startPublicAgent": {
    accessPointId: string;
    params: Record<string, string>;
  };
  "chat:addMessage": {
    chatId: string;
    baseUrl?: string;
    authToken?: string;
    model?: string;
    contextSize?: number;
    message: Partial<ChatMessage>;
  };
  "chat:ask": Partial<{
    chatId?: string;
    stopAfter?: string;
    stop?: string | string[];
    maxResponseTokens?: number;
    systemMessage?: string;
    userMessage?: string;
    assistantMessage?: string;
    returnId: string;
  }>;

  ingest: IngestRequest;
  "vector:deleteNamespace": string | string[];

  tts: { text: string; voiceId?: string };
  "tts:finished": void;
  "corpusDocument:delete": string | string[];

  "chat:generateAiText": {
    chatId: string;
    baseUrl?: string;
    authToken?: string;
    model?: string;
    contextSize?: number;
    abortId?: string;
  };

  messages: AppMessage[];

  "dataObject:sub": string | string[];
  "dataObject:unsub": string | string[];

  "dataObject:update": DataObject | DataObject[];
  "dataObject:murmur": DataObject | DataObject[];
  "dataObject:delete": string | string[];
  "dataObject:find": string | string[];
  "dataObject:findAllByObjectType": string | string[];

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
  "user:create": UserLoginRequest & { accessToken?: string; groups: string[] };
  "user:delete": string | string[];
  "user:groupAdd": string | string[];
  "user:groupRemove": string | string[];
  "function:call": AiFunctionCall;
};
