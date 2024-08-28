import { calcOctalPermissions } from "./calculateOctalPermissions";
import { PermissionLevel } from "../type/access/AccessInfo";
export const createAccessInfo = (draft) => {
    const { acl = [], owner, group = owner, permissions = calcOctalPermissions({
        user: PermissionLevel.WRITE,
        group: PermissionLevel.WRITE,
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