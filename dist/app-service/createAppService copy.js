import { uniqueId } from "../id/uniqueId";
export const createAppService = (draft = {}) => {
    const { id = uniqueId("app-service"), type = "unknown", enabled = false, count = 0, host, domain, } = draft;
    return { id, type, enabled, count, host, domain };
};
//# sourceMappingURL=createAppService%20copy.js.map