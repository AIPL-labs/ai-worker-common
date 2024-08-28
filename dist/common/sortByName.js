export const sortByName = (a, b) => {
    const aName = a?.name ?? "";
    const bName = b?.name ?? "";
    return aName.localeCompare(bName);
};
//# sourceMappingURL=sortByName.js.map