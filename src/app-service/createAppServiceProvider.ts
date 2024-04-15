import { uniqueId } from "../id/uniqueId";
import type { AppServiceProvider } from "../type/app-service/AppService";

export const createAppServiceProvider = (
  draft: Partial<AppServiceProvider> = {}
): AppServiceProvider => {
  const { id = uniqueId("app-service-provider"), ...rest } = draft;
  return { id, ...rest };
};
