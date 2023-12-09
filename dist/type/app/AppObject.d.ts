import { AiAgent as AiAgent } from "../ai-agent/AiBot";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { Corpus, CorpusDocument } from "../corpus/Corpus";
import { DataIndex } from "../data-index/DataIndex";
import { AppUser, AppUserProfile } from "../user/AppUser";
import { AppVoice } from "../voice/AppVoice";
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
    voice: AppVoice;
};
export type AppObjectType = keyof AppObjectTypeMap;
export type AppObject<T extends AppObjectType = AppObjectType> = AppObjectTypeMap[T];
export declare const APP_OBJECT_TYPES: AppObjectType[];
export declare const isAppObjectType: (maybe: unknown) => maybe is keyof AppObjectTypeMap;
//# sourceMappingURL=AppObject.d.ts.map