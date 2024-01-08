import { AppMessages } from "../../app-message/AppMessages";
import { AppObjects } from "../../app-object/AppObjects";
import { Apps } from "../../app/Apps";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const createDataIndexState = (draft) => {
    const idx = AppObjects.create("data-index", draft);
    if (!idx) {
        return Apps.error("Error creating index");
    }
    updateDataIndexesState((state) => {
        state.indexes[idx.id] = idx;
    });
    AppMessages.dispatch({
        type: "dataObject:update",
        detail: idx,
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=createDataIndexState.js.map