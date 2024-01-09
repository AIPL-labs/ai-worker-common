import { AiAgents } from "../agent/AiAgents";
import { createAppCharacter } from "../ai-character/createAppCharacter";
import { createAppVoice } from "../app-voice/createAppVoice";
import { createChatMessage } from "../chat-message/createChatMessage";
import { createChat } from "../chat/createChat";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createIngestResult } from "../ingest/createIngestResult";
import { createPhoneCall } from "../phone/createPhoneCall";
import { createTextExtraction } from "../text-extraction/createTextExtraction";
import { createUserProfile } from "../user-profile/createUserProfile";
export const APP_OBJECT_CREATORS = {
    "ai-agent": AiAgents.createAiAgent,
    corpus: Corproa.createCorpus,
    "corpus-document": Corproa.createCorpusDocument,
    "data-index": createDataIndex,
    voice: createAppVoice,
    "text-extraction": createTextExtraction,
    "chat-message": createChatMessage,
    chat: createChat,
    "user-profile": createUserProfile,
    "app-character": createAppCharacter,
    "ingest-result": createIngestResult,
    "phone-call": createPhoneCall,
};
//# sourceMappingURL=APP_OBJECT_CREATORS.js.map