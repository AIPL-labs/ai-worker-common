import { uniqueId } from "../id/uniqueId";
export const createAiFunctionCall = (draft = {}) => {
    const { id = uniqueId("function-call"), name, args = {} } = draft;
    return { id, name, args };
};
//# sourceMappingURL=createAiFunctionCall.js.map