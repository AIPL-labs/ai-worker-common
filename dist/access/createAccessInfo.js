import { calcOctalPermissions } from "./calculateOctalPermissions";
import { PermissionLevel } from "./AccessInfo";
export const createAccessInfo = (draft) => {
    const { acl = [], owner, group = owner, permissions = calcOctalPermissions({
        user: PermissionLevel.WRITE,
        group: PermissionLevel.READ,
        world: PermissionLevel.NONE,
    }), } = draft;
    return {
        acl,
        group,
        owner,
        permissions,
    };
};
//# sourceMappingURL=createAccessInfo.js.map