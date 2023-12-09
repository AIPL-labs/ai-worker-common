import { AiAgents } from "../agent/AiAgents";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { AppObjectType } from "../type/app/AppObject";
import { createAppVoice } from "../app-voice/createAppVoice";
import { AppObjectCreator } from "./createAppObject";

export const APP_OBJECT_CREATORS: Partial<{
  [K in AppObjectType]: AppObjectCreator<K>;
}> = {
  "ai-agent": AiAgents.createAiAgent,
  corpus: Corproa.createCorpus,
  "corpus-document": Corproa.createCorpusDocument,
  "data-index": createDataIndex,
  voice: createAppVoice,
};
