import { getDataIndexState } from "./getDataIndexState";
export const getDataIndexStateRecord = (idxId, recordId) => {
    const idx = getDataIndexState(idxId);
    if (!idx) {
        return undefined;
    }
    return idx.records[recordId];
};
//# sourceMappingURL=getDataIndexStateRecord.js.map