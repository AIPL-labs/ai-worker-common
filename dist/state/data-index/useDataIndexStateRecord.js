import { useDataIndexState } from "./useDataIndexState";
export const useDataIndexStateRecord = (idxId, recordId) => {
    const idx = useDataIndexState(idxId);
    if (!idx) {
        return undefined;
    }
    return idx.records[recordId];
};
//# sourceMappingURL=useDataIndexStateRecord.js.map