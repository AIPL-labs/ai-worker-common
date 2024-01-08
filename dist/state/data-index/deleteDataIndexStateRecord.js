import { AppMessages } from "../../app-message/AppMessages";
import { Apps } from "../../app/Apps";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const deleteDataIndexStateRecord = (idxId, recordId) => {
    updateDataIndexesState((state) => {
        const idx = state.indexes[idxId];
        if (!idx) {
            return Apps.error(`No data index: ${idxId}`);
        }
        delete idx.records[recordId];
    });
    AppMessages.dispatch({
        type: "dataIndexRecord:delete",
        detail: {
            idxId,
            recordId,
        },
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=deleteDataIndexStateRecord.js.map