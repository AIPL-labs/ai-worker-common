import { uniqueId } from "../id/uniqueId";
import { AccessPoint } from "../type/access/AccessPoint";

export const createAccessPoint = (draft: Partial<AccessPoint>): AccessPoint => {
  const { id = uniqueId("access-point"), name = "Access Point" } = draft;
  return {
    id,
    name,
  };
};
