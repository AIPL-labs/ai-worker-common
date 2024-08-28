import { PermissionLevel } from "../type/access/AccessInfo";
export function calcOctalPermissions({ user: user, group: group, world: world, }) {
    const userOctal = permissionLevelToOctal(user);
    const groupOctal = permissionLevelToOctal(group);
    const worldOctal = permissionLevelToOctal(world);
    // Combine the octal values for user, group, and world permissions
    return (userOctal << 6) | (groupOctal << 3) | worldOctal;
}
function permissionLevelToOctal(permissionLevel) {
    switch (permissionLevel) {
        case PermissionLevel.READ:
            return 4;
        case PermissionLevel.WRITE:
            return 2;
        case PermissionLevel.EXECUTE:
            return 1;
        case PermissionLevel.NONE:
        default:
            return 0;
    }
}
//# sourceMappingURL=calculateOctalPermissions.js.map