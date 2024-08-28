import { uniqueId } from "../id/uniqueId";
export const createAppServiceNode = (draft = {}) => {
    const { id = uniqueId("app-service-node"), url, status = "offline" } = draft;
    return { id, url, status };
};
//# sourceMappingURL=createAppServiceNode.js.map