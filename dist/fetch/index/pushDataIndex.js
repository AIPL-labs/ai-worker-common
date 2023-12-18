import { putBackendDataObject } from "../data/putBackendDataObject";
export const pushDataIndex = async (index) => {
    const resp = await putBackendDataObject(index);
    if (!resp.ok) {
        return undefined;
    }
    return index;
};
export const pushDataIndexRecord = async ({ indexId, record, }) => {
    throw "TBD";
};
export const deleteDataIndexRecord = async ({ indexId, recordId, }) => {
    throw "TBD";
};
//# sourceMappingURL=pushDataIndex.js.map