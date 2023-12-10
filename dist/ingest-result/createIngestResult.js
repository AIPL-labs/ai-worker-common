import { uniqueId } from "../id/uniqueId";
export const createIngestResult = (draft) => {
    const { id = uniqueId("ingest-result"), request, results = {}, status = "STARTING", } = draft;
    return {
        id,
        request,
        results,
        status,
    };
};
//# sourceMappingURL=createIngestResult.js.map