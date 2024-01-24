import { calcOctalPermissions } from "./calculateOctalPermissions";
import { getPermissionLevel } from "./checkAccessPermissions";
export declare const Accesses: {
    calcOctalPermissions: typeof calcOctalPermissions;
    getPermissionLevel: typeof getPermissionLevel;
    createAccessInfo: (draft: {
        owner: string;
    } & Partial<import("..").AccessInfo>) => import("..").AccessInfo;
    hasAccess: (user: import("../type/access/AccessUser").AccessUser, accessInfo: import("..").AccessInfo, desiredLevel?: import("..").PermissionLevel) => boolean;
};
//# sourceMappingURL=Accesses.d.ts.map