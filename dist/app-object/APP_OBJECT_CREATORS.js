import { createAccessPoint } from "../access-point/createAccessPoint";
import { createAppCharacter } from "../ai-character/createAppCharacter";
import { createAiFunctionCall } from "../ai-function/createAiFunctionCall";
import { createFunctionCallResult } from "../ai-function/createFunctionCallResult";
import { createAppGroup } from "../app-group/createAppGroup";
import { createAppInterface } from "../app-interface/createAppInterface";
import { createAppService } from "../app-service/createAppService";
import { createAppServiceProvider } from "../app-service/createAppServiceProvider";
import { createAppVoice } from "../app-voice/createAppVoice";
import { createAppWebsocket } from "../app-websocket/createAppWebsocket";
import { createChatMessage } from "../chat-message/createChatMessage";
import { createChat } from "../chat/createChat";
import { createChatStateEntry } from "../chat/createChatStateEntry";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createIngestResult } from "../ingest/createIngestResult";
import { createPhoneCall } from "../phone/createPhoneCall";
import { createTextExtraction } from "../text-extraction/createTextExtraction";
import { createAccessPointTheme } from "../theme/createAccessPointTheme";
import { createThought } from "../thought/createThought";
import { createUserProfile } from "../user-profile/createUserProfile";
export const APP_OBJECT_CREATORS = {
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
    thought: createThought,
    "access-point": createAccessPoint,
    "access-point-theme": createAccessPointTheme,
    "app-interface": createAppInterface,
    "app-group": createAppGroup,
    "function-call": createAiFunctionCall,
    "function-call-result": createFunctionCallResult,
    "chat-state-entry": createChatStateEntry,
    "app-websocket": createAppWebsocket,
    "app-service": createAppService,
    "app-service-provider": createAppServiceProvider,
};
//# sourceMappingURL=APP_OBJECT_CREATORS.js.map