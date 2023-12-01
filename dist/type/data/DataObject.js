export const isDataObject = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.id === "string";
};
//# sourceMappingURL=DataObject.js.map