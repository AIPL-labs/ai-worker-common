import { uniqueId } from "../id/uniqueId";
export const createDefaultAppObject = (objectType, draft = {}) => {
    const { id = uniqueId(objectType), ...rest } = draft;
    return { id, ...rest };
};
//# sourceMappingURL=createDefaultAppObject.js.map