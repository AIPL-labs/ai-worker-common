import { isNotEmpty } from "@mjtdev/engine";
import { useDataIndexesState } from "./DataIndexesState";
import { createDataIndexState } from "./createDataIndexState";
export const useDataIndexState = (id, options = {}) => {
    const { createIfNotFound = false } = options;
    const { indexes } = useDataIndexesState();
    const idx = indexes[id];
    if (!idx && createIfNotFound && id && isNotEmpty(id)) {
        // avoid react updating parent at same time as rendering child issue
        setTimeout(() => {
            createDataIndexState({ id });
        }, 0);
    }
    return idx;
};
//# sourceMappingURL=useDataIndexState.js.map