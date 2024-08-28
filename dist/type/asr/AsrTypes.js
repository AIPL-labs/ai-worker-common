export const isAsrResult = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.segments);
};
//# sourceMappingURL=AsrTypes.js.map