import { AiAgents } from "../agent/AiAgents";
import { createAppVoice } from "../app-voice/createAppVoice";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createIngestResult } from "../ingest-result/createIngestResult";
import { createVectorStore } from "../vector-store/createVectorStore";
export const APP_OBJECT_CREATORS = {
    "ai-agent": AiAgents.createAiAgent,
    corpus: Corproa.createCorpus,
    "corpus-document": Corproa.createCorpusDocument,
    "data-index": createDataIndex,
    voice: createAppVoice,
    "vector-store": createVectorStore,
    'ingest-result': createIngestResult
};
//# sourceMappingURL=APP_OBJECT_CREATORS.js.map