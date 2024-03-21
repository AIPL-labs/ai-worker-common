import { uniqueId } from "../id/uniqueId";
import { AppWebsocket } from "../type/app-websocket/AppWebsocket";

export const createAppWebsocket = (
  draft: Partial<AppWebsocket> = {}
): AppWebsocket => {
  const { id = uniqueId("app-websocket"), objectIds = [] } = draft;
  return { id, objectIds };
};
