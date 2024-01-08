import { AppMessages } from "../../app-message/AppMessages";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const deleteDataIndexState = (idx) => {
    updateDataIndexesState((state) => {
        delete state.indexes[idx.id];
    });
    AppMessages.dispatch({
        type: "dataObject:delete",
        detail: idx.id,
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=deleteDataIndexState.js.map