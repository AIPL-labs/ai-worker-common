import { uniqueId } from "../id/uniqueId";
export const createAppInterface = (draft = {}) => {
    const { id = uniqueId("app-interface") } = draft;
    return { id };
};
//# sourceMappingURL=createAppInterface.js.map