import { iff } from "@mjtdev/engine";
import { AppMessages } from "../../app-message/AppMessages";
import { Apps } from "../../app/Apps";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
import { getDataIndexState } from "./getDataIndexState";
export const updateDataIndexState = (id, updater) => {
    updateDataIndexesState((state) => {
        const idx = state.indexes[id];
        if (!idx) {
            Apps.error(`No data index: ${id}`);
            return;
        }
        updater(idx);
    });
    iff(getDataIndexState(id), (idx) => {
        AppMessages.dispatch({
            type: "dataObject:update",
            detail: idx,
        });
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=updateDataIndexState.js.map