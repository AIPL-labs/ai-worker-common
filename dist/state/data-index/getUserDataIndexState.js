import { getDataIndexState } from "./getDataIndexState";
import { getUserDataIndexId } from "./getUserDataIndexId";
export const getUserDataIndexState = ({ userId, objectType, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return getDataIndexState(idxId, {
        createIfNotFound: true,
    });
};
//# sourceMappingURL=getUserDataIndexState.js.map