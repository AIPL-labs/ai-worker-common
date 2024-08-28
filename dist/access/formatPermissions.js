export const formatPermissions = (perms) => {
    const masks = {
        read: 4,
        write: 2,
        execute: 1,
    };
    const types = ["user", "group", "others"];
    // Translate the octal integer to a binary string for each type
    const permsStr = types.map((type) => {
        const shift = type === "user" ? 6 : type === "group" ? 3 : 0;
        const typePerms = (perms >> shift) & 7; // isolate three bits for each type
        return [
            typePerms & masks.read ? "r" : "-",
            typePerms & masks.write ? "w" : "-",
            typePerms & masks.execute ? "x" : "-",
        ].join("");
    });
    return permsStr.join("");
};
//# sourceMappingURL=formatPermissions.js.map