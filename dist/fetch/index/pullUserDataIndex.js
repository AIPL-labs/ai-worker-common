import { DataIndexes } from "./DataIndexes";
import { getUserDataIndexId } from "./getUserDataIndexId";
export const pullUserDataIndex = async (
// name: string,
objectType, userId, options = {}) => {
    // const { id } = getUserState();
    const { createIfNotFound = false } = options;
    if (!userId) {
        return;
    }
    // const idxId = `${name}-${userId}`;
    const idxId = getUserDataIndexId(objectType, userId);
    const idx = await DataIndexes.pullDataIndex(idxId);
    if (!idx && createIfNotFound) {
        return DataIndexes.pushDataIndex({
            id: idxId,
            records: {},
        });
    }
    return idx;
};
//# sourceMappingURL=pullUserDataIndex.js.map