import { iff } from "@mjtdev/engine";
import { AppMessages } from "../../app-message/AppMessages";
import { AppObjects } from "../../app-object/AppObjects";
import { Apps } from "../../app/Apps";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
import { getDataIndexStateRecord } from "./getDataIndexStateRecord";
export const upsertDataIndexStateRecord = ({ idxId, recordId, upserter, createIfNotFound = true, }) => {
    updateDataIndexesState((state) => {
        let idx = state.indexes[idxId];
        if (!idx && createIfNotFound) {
            idx = AppObjects.create("data-index");
            state.indexes[idxId] = idx;
        }
        if (!idx) {
            return Apps.error(`No data index: ${idxId}`);
        }
        const record = idx.records[recordId];
        upserter(record);
    });
    iff(getDataIndexStateRecord(idxId, recordId), (record) => {
        AppMessages.dispatch({
            type: "dataIndexRecord:update",
            detail: { idxId, record },
        });
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=upsertDataIndexStateRecord.js.map