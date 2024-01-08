import { PermissionLevel } from "./AccessInfo";
export function getPermissionLevel(accessInfo, user) {
    const { id: userName, groups = [] } = user;
    // Check if the user is the owner
    if (userName === accessInfo.owner) {
        return checkOctalPermissions(accessInfo.permissions >> 6);
    }
    // Check if the user is in the group
    if (accessInfo.group && groups.includes(accessInfo.group)) {
        return checkOctalPermissions((accessInfo.permissions >> 3) & 7);
    }
    // Check ACL for specific user permissions
    const aclEntry = accessInfo.acl.find((entry) => entry.userName === user.id);
    if (aclEntry) {
        switch (aclEntry.permissions) {
            case "read":
                return PermissionLevel.READ;
            case "write":
                return PermissionLevel.WRITE;
            case "execute":
                return PermissionLevel.EXECUTE;
            // Add more cases for additional permission levels if needed
            default:
                return PermissionLevel.NONE;
        }
    }
    // Check octal permissions for others (world)
    return checkOctalPermissions(accessInfo.permissions & 7);
    // // Default to no permissions
    // return PermissionLevel.NONE;
}
function checkOctalPermissions(octalValue) {
    if ((octalValue & PermissionLevel.EXECUTE) !== 0) {
        return PermissionLevel.EXECUTE;
    }
    else if ((octalValue & PermissionLevel.WRITE) !== 0) {
        return PermissionLevel.WRITE;
    }
    else if ((octalValue & PermissionLevel.READ) !== 0) {
        return PermissionLevel.READ;
    }
    else {
        return PermissionLevel.NONE;
    }
}
//# sourceMappingURL=checkAccessPermissions.js.map