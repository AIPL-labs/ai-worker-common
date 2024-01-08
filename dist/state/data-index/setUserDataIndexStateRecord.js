import { getUserDataIndexId } from "./getUserDataIndexId";
import { setDataIndexStateRecord } from "./setDataIndexStateRecord";
export const setUserDataIndexStateRecord = ({ userId, objectType, record, }) => {
    const idxId = getUserDataIndexId(userId, objectType);
    return setDataIndexStateRecord(idxId, record);
};
//# sourceMappingURL=setUserDataIndexStateRecord.js.map