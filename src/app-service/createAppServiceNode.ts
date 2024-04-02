import { uniqueId } from "../id/uniqueId";
import { AppServiceNode } from "../type/app-service/AppService";

export const createAppServiceNode = (
  draft: Partial<AppServiceNode> = {}
): AppServiceNode => {
  const { id = uniqueId("app-service-node"), url, status = "offline" } = draft;
  return { id, url, status };
};
