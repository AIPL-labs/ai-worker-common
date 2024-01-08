import { getDataIndexesState } from "./DataIndexesState";
import { createDataIndexState } from "./createDataIndexState";
export const getDataIndexState = (id, options = {}) => {
    const { createIfNotFound = false } = options;
    const { indexes } = getDataIndexesState();
    const idx = indexes[id];
    if (!idx && createIfNotFound) {
        createDataIndexState({ id });
    }
    return idx;
};
//# sourceMappingURL=getDataIndexState.js.map