import { getUserDataIndexId } from "../../fetch/index/getUserDataIndexId";
import { deleteDataIndexStateRecord } from "./deleteDataIndexStateRecord";
export const deleteUserDataIndexStateRecord = ({ objectType, recordId, userId, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return deleteDataIndexStateRecord(idxId, recordId);
};
//# sourceMappingURL=deleteUserDataIndexStateRecord.js.map