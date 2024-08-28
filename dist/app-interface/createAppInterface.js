import { uniqueId } from "../id/uniqueId";
export const createAppInterface = (draft = {}) => {
    const { id = uniqueId("app-interface"), ...rest } = draft;
    return { id, ...rest };
};
//# sourceMappingURL=createAppInterface.js.map