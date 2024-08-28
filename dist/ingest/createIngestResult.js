import { uniqueId } from "../id/uniqueId";
export const createIngestResult = (draft) => {
    const { id = uniqueId("ingest-result"), chunks = [], dataId, errors = [], ingestEndTime, ingestStartTime, text, vectors, } = draft;
    return {
        id,
        chunks,
        dataId,
        errors,
        ingestEndTime,
        ingestStartTime,
        text,
        vectors,
    };
};
//# sourceMappingURL=createIngestResult.js.map