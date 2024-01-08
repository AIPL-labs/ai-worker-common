import { getUserDataIndexId } from "./getUserDataIndexId";
import { updateDataIndexStateRecord } from "./updateDataIndexStateRecord";
export const updateUserDataIndexStateRecord = ({ objectType, recordId, updater, userId, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return updateDataIndexStateRecord(idxId, recordId, updater);
};
//# sourceMappingURL=updateUserDataIndexStateRecord.js.map