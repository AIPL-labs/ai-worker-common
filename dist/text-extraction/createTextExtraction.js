import { uniqueId } from "../id/uniqueId";
export const createTextExtraction = (draft) => {
    const { id = uniqueId("text-extraction"), request, results = {}, status = "STARTING", } = draft;
    return {
        id,
        request,
        results,
        status,
    };
};
//# sourceMappingURL=createTextExtraction.js.map