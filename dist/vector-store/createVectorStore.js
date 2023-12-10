import { uniqueId } from "../id/uniqueId";
export const createVectorStore = (draft = {}) => {
    const { id = uniqueId("vector-store"), name = "New Vector Store", corpusIds = [], ingestResultId = uniqueId("ingest-result"), } = draft;
    return { id, name, corpusIds, ingestResultId };
};
//# sourceMappingURL=createVectorStore.js.map