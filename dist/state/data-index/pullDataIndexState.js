import { Apps } from "../../app/Apps";
import { DataIndexes } from "../../fetch/index/DataIndexes";
import { storeDataIndexesState, updateDataIndexesState, } from "./DataIndexesState";
export const pullDataIndexState = async (id) => {
    const idx = await DataIndexes.pullDataIndex(id);
    if (!idx) {
        return Apps.error(`No data index: ${id}`);
    }
    updateDataIndexesState((state) => {
        state.indexes[idx.id] = idx;
    });
    return storeDataIndexesState();
};
//# sourceMappingURL=pullDataIndexState.js.map