import { uniqueId } from "../id/uniqueId";
export const createAppGroup = (draft) => {
    const { id = uniqueId("app-group"), name } = draft;
    return { id, name };
};
//# sourceMappingURL=createAppGroup.js.map