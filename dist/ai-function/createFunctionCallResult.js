import { uniqueId } from "../id/uniqueId";
export const createFunctionCallResult = (draft = {}) => {
    const { id = uniqueId("function-call-result"), call, prompt, type, value, } = draft;
    if (!call || !type || !value) {
        throw new Error("call type and value are required");
    }
    return { id, call, prompt, type, value };
};
//# sourceMappingURL=createFunctionCallResult.js.map