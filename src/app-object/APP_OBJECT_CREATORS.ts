import { createAccessPoint } from "../access-point/createAccessPoint";
import { createAppCharacter } from "../ai-character/createAppCharacter";
import { createAiFunctionCall } from "../ai-function/createAiFunctionCall";
import { createFunctionCallResult } from "../ai-function/createFunctionCallResult";
import { createAppGroup } from "../app-group/createAppGroup";
import { createAppInterface } from "../app-interface/createAppInterface";
import { createAppService } from "../app-service/createAppService";
import { createAppServiceNode } from "../app-service/createAppServiceNode";
import { createAppServiceProvider } from "../app-service/createAppServiceProvider";
import { createAppVoice } from "../app-voice/createAppVoice";
import { createAppWebsocket } from "../app-websocket/createAppWebsocket";
import { createChatMessage } from "../chat-message/createChatMessage";
import { createChatStarter } from "../chat/crateChatStarter";
import { createChat } from "../chat/createChat";
import { createChatStateEntry } from "../chat/createChatStateEntry";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createIngestResult } from "../ingest/createIngestResult";
import { createPhoneCall } from "../phone/createPhoneCall";
import { createTextExtraction } from "../text-extraction/createTextExtraction";
import { createAccessPointTheme } from "../theme/createAccessPointTheme";
import { createThought } from "../thought/createThought";
import type { AppObjectType } from "../type/app/AppObject";
import { createUserProfile } from "../user-profile/createUserProfile";
import type { AppObjectCreator } from "./createAppObject";

export const APP_OBJECT_CREATORS: Partial<{
  [K in AppObjectType]: AppObjectCreator<K>;
}> = {
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
  "app-service-node": createAppServiceNode,
  "app-service-provider": createAppServiceProvider,
  "chat-starter": createChatStarter,
};
