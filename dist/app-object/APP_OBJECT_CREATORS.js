import { AiAgents } from "../agent/AiAgents";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
export const APP_OBJECT_CREATORS = {
    "ai-agent": AiAgents.createAiAgent,
    corpus: Corproa.createCorpus,
    "corpus-document": Corproa.createCorpusDocument,
    "data-index": createDataIndex,
};
//# sourceMappingURL=APP_OBJECT_CREATORS.js.map