import { PermissionLevel } from "../type/access/AccessInfo";
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
    if (user.id === "system") {
        return true;
    }
    const { groups = [] } = user;
    if (groups.includes("app-admin")) {
        return true;
    }
    const level = getPermissionLevel(accessInfo, user);
    return LEVEL_HIERARCHY[level].includes(desiredLevel);
};
//# sourceMappingURL=hasAccess.js.map