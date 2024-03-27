import { uniqueId } from "../id/uniqueId";
export const createAppService = (draft = {}) => {
    const { id = uniqueId("app-service"), status = "offline", type = "unknown", enabled = false, count = 0, host, domain, } = draft;
    return { id, status, type, enabled, count, host, domain };
};
//# sourceMappingURL=createAppService.js.map