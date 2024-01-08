import { getDataIndexStateRecord } from "./getDataIndexStateRecord";
import { getUserDataIndexId } from "./getUserDataIndexId";
export const getUserDataIndexStateRecord = ({ userId, objectType, recordId, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return getDataIndexStateRecord(idxId, recordId);
};
//# sourceMappingURL=getUserDataIndexStateRecord.js.map