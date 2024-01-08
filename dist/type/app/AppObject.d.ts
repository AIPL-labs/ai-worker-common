import { TextExtraction } from "type/corpus/TextExtraction";
import { AiAgent } from "../ai-agent/AiBot";
import { AppCharacter } from "../app-character/AppCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { Corpus, CorpusDocument } from "../corpus/Corpus";
import { DataIndex } from "../data-index/DataIndex";
import { AppUser, AppUserProfile } from "../user/AppUser";
import { AppVoice } from "../voice/AppVoice";
import { IngestResult } from "../rest/IngestRequest";
export type AppObjectTypeMap = {
    chat: Chat;
    "chat-message": ChatMessage;
    "app-character": AppCharacter;
    "ai-agent": AiAgent;
    "app-user": AppUser;
    "user-profile": AppUserProfile;
    corpus: Corpus;
    "corpus-document": CorpusDocument;
    "data-index": DataIndex;
    voice: AppVoice;
    "text-extraction": TextExtraction;
    "ingest-result": IngestResult;
};
export type AppObjectType = keyof AppObjectTypeMap;
export type AppObject<T extends AppObjectType = AppObjectType> = AppObjectTypeMap[T];
export declare const APP_OBJECT_TYPES: AppObjectType[];
export declare const isAppObjectType: (maybe: unknown) => maybe is keyof AppObjectTypeMap;
//# sourceMappingURL=AppObject.d.ts.map