export const isDataIndex = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" &&
        typeof straw.id === "string" &&
        typeof straw.records === "object");
};
//# sourceMappingURL=DataIndex.js.map