import { AppMessages } from "../../app-message/AppMessages";
import { AppObjects } from "../../app-object/AppObjects";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const setDataIndexStateRecord = (idxId, record) => {
    updateDataIndexesState((state) => {
        let idx = state.indexes[idxId];
        if (!idx) {
            idx = AppObjects.create("data-index");
            state.indexes[idxId] = idx;
        }
        idx.records[record.id] = record;
    });
    AppMessages.dispatch({
        type: "dataIndexRecord:update",
        detail: { idxId, record },
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=setDataIndexStateRecord.js.map