import { getUserDataIndexId } from "./getUserDataIndexId";
import { useDataIndexStateRecord } from "./useDataIndexStateRecord";
export const useUserDataIndexStateRecord = ({ userId, objectType, recordId, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return useDataIndexStateRecord(idxId, recordId);
};
//# sourceMappingURL=useUserDataIndexStateRecord.js.map