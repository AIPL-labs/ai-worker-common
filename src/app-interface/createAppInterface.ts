import { uniqueId } from "../id/uniqueId";
import type { AppInterface } from "../type/app-interface/AppInterface";

export const createAppInterface = (
  draft: Partial<AppInterface> = {}
): AppInterface => {
  const { id = uniqueId("app-interface") } = draft;
  return { id };
};
