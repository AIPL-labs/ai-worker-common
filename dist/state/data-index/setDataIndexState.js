import { AppMessages } from "../../app-message/AppMessages";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const setDataIndexState = (idx) => {
    updateDataIndexesState((state) => {
        state.indexes[idx.id] = idx;
    });
    AppMessages.dispatch({
        type: "dataObject:update",
        detail: idx,
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=setDataIndexState.js.map