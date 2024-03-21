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
import { ElevenLabsWebsocketResult } from "../../3rd/elevenlabs/ElevenLabsWebsocketResult";
import { SdApiTxt2ImgRequest } from "../../3rd/sdapi";
export type MessageChunk = {
    id: string;
    idx: number;
    total: number;
    chunk: string;
};
export type AbortableMessageDetail = {
    abortId: string;
};
export declare const isAbortableMessageDetail: (maybe: unknown) => maybe is AbortableMessageDetail;
export type ReturnableMessageDetail = {
    returnId: string;
};
export declare const isReturnableMessageDetail: (maybe: unknown) => maybe is ReturnableMessageDetail;
export type AppMessageMap = {
    auth: string;
    access: string;
    ping: string;
    abort: string;
    toast: string;
    log: {
        message?: string;
        extra?: unknown;
        stack?: string;
        cause?: unknown;
        level?: "info" | "debug" | "error" | "trace";
    };
    "appInterface:update": {
        ttsEnabled: boolean;
    };
    "return:dataObject": DataObject;
    "chat:debug": {
        prompt: string;
        facts: Record<string, string | undefined>;
    };
    "chat:phone": {
        phoneCall: Partial<PhoneCall>;
        chat: Partial<Chat>;
    };
    "chat:start": Partial<Chat>;
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
    "chat:insertMessage": {
        chatId: string;
        targetId: string | undefined;
        message: Partial<ChatMessage>;
    };
    "chat:deleteMessage": {
        chatId: string;
        messageId: string;
    };
    "chat:ask": Partial<ReturnableMessageDetail & {
        chatId?: string;
        stopAfter?: string;
        stop?: string | string[];
        maxResponseTokens?: number;
        systemMessage?: string;
        userMessage?: string;
        assistantMessage?: string;
        streamId: string;
    }>;
    ingest: IngestRequest;
    "vector:deleteNamespace": string | string[];
    "image:generate": Partial<AbortableMessageDetail> & ReturnableMessageDetail & {
        request: Partial<SdApiTxt2ImgRequest>;
    };
    tts: {
        text: string;
        voiceId?: string;
    };
    "tts:elevenlabs:result": ElevenLabsWebsocketResult & {
        mediaType: string;
    };
    "tts:finished": void;
    "tts:say": {
        text: string;
        characterId: string;
    };
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
    };
    "user:delete": string | string[];
    "user:groupAdd": string | string[];
    "user:groupRemove": string | string[];
    "user:changePassword": {
        userId: string;
        password: string;
    };
    "function:call": AiFunctionCall;
    "message:chunk": MessageChunk;
};
//# sourceMappingURL=AppMessageMap.d.ts.map