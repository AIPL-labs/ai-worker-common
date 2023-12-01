import { calcOctalPermissions } from "./calculateOctalPermissions";
import { getPermissionLevel } from "./checkAccessPermissions";
export declare const Accesses: {
    calcOctalPermissions: typeof calcOctalPermissions;
    getPermissionLevel: typeof getPermissionLevel;
    createAccessInfo: (draft: {
        owner: string;
    } & Partial<import("./AccessInfo").AccessInfo>) => import("./AccessInfo").AccessInfo;
    hasAccess: (user: import("./AccessUser").AccessUser, accessInfo: import("./AccessInfo").AccessInfo, desiredLevel?: import("./AccessInfo").PermissionLevel) => boolean;
};
//# sourceMappingURL=Accesses.d.ts.map