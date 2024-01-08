import { getUserDataIndexId } from "./getUserDataIndexId";
import { useDataIndexState } from "./useDataIndexState";
export const useUserDataIndexState = ({ objectType, options = {}, userId, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    const { createIfNotFound = true } = options;
    return useDataIndexState(idxId, {
        createIfNotFound,
    });
};
//# sourceMappingURL=useUserDataIndexState.js.map