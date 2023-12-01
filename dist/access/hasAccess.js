import { PermissionLevel } from "./AccessInfo";
import { getPermissionLevel } from "./checkAccessPermissions";
const LEVEL_HIERARCHY = {
    [PermissionLevel.NONE]: [],
    [PermissionLevel.READ]: [PermissionLevel.READ],
    [PermissionLevel.WRITE]: [PermissionLevel.READ, PermissionLevel.WRITE],
    [PermissionLevel.EXECUTE]: [
        PermissionLevel.READ,
        PermissionLevel.WRITE,
        PermissionLevel.EXECUTE,
    ],
};
export const hasAccess = (user, accessInfo, desiredLevel = PermissionLevel.READ) => {
    const level = getPermissionLevel(accessInfo, user);
    return LEVEL_HIERARCHY[level].includes(desiredLevel);
};
//# sourceMappingURL=hasAccess.js.map