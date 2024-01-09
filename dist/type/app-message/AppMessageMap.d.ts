import { AppObjectType } from "../app/AppObject";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { PhoneCall } from "type/phone/PhoneCall";
import { DataLink, DataObject } from "../data/DataObject";
import { IngestRequest } from "../rest/IngestRequest";
import { AppMessage } from "./AppMessage";
export type AppMessageMap = {
    auth: string;
    ping: string;
    abort: string | undefined;
    error: string;
    toast: string;
    "chat:phone": {
        phoneCall: Partial<PhoneCall>;
        chat: Partial<Chat>;
    };
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
    tts: {
        text: string;
        voiceId?: string;
    };
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
    "dataObject:find": string | string[];
    "dataLink:find": {
        parentId: string;
        objectType?: AppObjectType;
    };
    "dataLink:update": DataLink;
    "dataLink:delete": Partial<DataLink>;
};
//# sourceMappingURL=AppMessageMap.d.ts.map