import { uniqueId } from "../id/uniqueId";
export const createAppWebsocket = (draft = {}) => {
    const { id = uniqueId("app-websocket"), objectIds = [] } = draft;
    return { id, objectIds };
};
//# sourceMappingURL=createAppWebsocket.js.map