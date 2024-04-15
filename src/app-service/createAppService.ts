import { uniqueId } from "../id/uniqueId";
import type { AppService } from "../type/app-service/AppService";

export const createAppService = (
  draft: Partial<AppService> = {}
): AppService => {
  const {
    id = uniqueId("app-service"),
    type = "unknown",
    enabled = false,
    count = 0,
    host,
    domain,
  } = draft;
  return { id, type, enabled, count, host, domain };
};
