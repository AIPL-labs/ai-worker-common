export const isAiplError = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.loc === "object";
};
//# sourceMappingURL=AiplError.js.map