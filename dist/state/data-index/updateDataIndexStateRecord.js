import { iff } from "@mjtdev/engine";
import { AppMessages } from "../../app-message/AppMessages";
import { Apps } from "../../app/Apps";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
import { getDataIndexStateRecord } from "./getDataIndexStateRecord";
export const updateDataIndexStateRecord = (idxId, recordId, updater) => {
    updateDataIndexesState((state) => {
        const idx = state.indexes[idxId];
        if (!idx) {
            return Apps.error(`No data index: ${idxId}`);
        }
        const record = idx.records[recordId];
        if (!record) {
            return Apps.error(`No data index record: ${recordId}`);
        }
        updater(record);
    });
    iff(getDataIndexStateRecord(idxId, recordId), (record) => {
        AppMessages.dispatch({
            type: "dataIndexRecord:update",
            detail: { idxId, record },
        });
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=updateDataIndexStateRecord.js.map