import { AccessInfo, PermissionLevel } from "../type/access/AccessInfo";
import { AccessUser } from "../type/access/AccessUser";
import { getPermissionLevel } from "./checkAccessPermissions";

const LEVEL_HIERARCHY: Record<PermissionLevel, PermissionLevel[]> = {
  [PermissionLevel.NONE]: [],
  [PermissionLevel.READ]: [PermissionLevel.READ],
  [PermissionLevel.WRITE]: [PermissionLevel.READ, PermissionLevel.WRITE],
  [PermissionLevel.EXECUTE]: [
    PermissionLevel.READ,
    PermissionLevel.WRITE,
    PermissionLevel.EXECUTE,
  ],
};

export const hasAccess = (
  user: AccessUser,
  accessInfo: AccessInfo,
  desiredLevel = PermissionLevel.READ
) => {
  if (user.id === "system") {
    return true;
  }
  const level = getPermissionLevel(accessInfo, user);
  return LEVEL_HIERARCHY[level].includes(desiredLevel);
};
