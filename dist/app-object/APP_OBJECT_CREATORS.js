import { AiAgents } from "../agent/AiAgents";
import { Corproa } from "../corpus/Corpora";
import { createDataIndex } from "../data-index/crateDataIndex";
import { createAppVoice } from "../app-voice/createAppVoice";
export const APP_OBJECT_CREATORS = {
    "ai-agent": AiAgents.createAiAgent,
    corpus: Corproa.createCorpus,
    "corpus-document": Corproa.createCorpusDocument,
    "data-index": createDataIndex,
    voice: createAppVoice,
};
//# sourceMappingURL=APP_OBJECT_CREATORS.js.map