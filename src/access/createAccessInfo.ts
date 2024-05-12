import { calcOctalPermissions } from "./calculateOctalPermissions";
import type { AccessInfo } from "../type/access/AccessInfo";
import { PermissionLevel } from "../type/access/AccessInfo";

export const createAccessInfo = (
  draft: { owner: string } & Partial<AccessInfo>
): AccessInfo => {
  const {
    acl = [],
    owner,
    group = owner,
    permissions = calcOctalPermissions({
      user: PermissionLevel.WRITE,
      group: PermissionLevel.WRITE,
      world: PermissionLevel.NONE,
    }),
  } = draft;

  return {
    acl,
    group,
    owner,
    permissions,
  };
};
