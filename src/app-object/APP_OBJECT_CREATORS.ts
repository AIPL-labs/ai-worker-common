import { AiAgents } from "../agent/AiAgents";
import { createAppVoice } from "../app-voice/createAppVoice";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createIngestResult } from "../ingest-result/createIngestResult";
import { AppObjectType } from "../type/app/AppObject";
import { createVectorStore } from "../vector-store/createVectorStore";
import { AppObjectCreator } from "./createAppObject";

export const APP_OBJECT_CREATORS: Partial<{
  [K in AppObjectType]: AppObjectCreator<K>;
}> = {
  "ai-agent": AiAgents.createAiAgent,
  corpus: Corproa.createCorpus,
  "corpus-document": Corproa.createCorpusDocument,
  "data-index": createDataIndex,
  voice: createAppVoice,
  "vector-store": createVectorStore,
  'ingest-result': createIngestResult
};
