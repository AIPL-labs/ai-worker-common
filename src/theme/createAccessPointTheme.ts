import { uniqueId } from "../id/uniqueId";
import type { AccessPointTheme } from "../type/theme/AccessPointTheme";

export const createAccessPointTheme = (
  draft: Partial<AccessPointTheme>
): AccessPointTheme => {
  const {
    id = uniqueId("access-point-theme"),
    name,
    backgroundColor,
    color,
  } = draft;

  return {
    id,
    name,
    backgroundColor,
    color,
  };
};
