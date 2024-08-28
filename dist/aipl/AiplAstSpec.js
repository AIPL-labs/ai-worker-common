export const isAiplProgramAstNode = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && straw.type === "program";
};
//# sourceMappingURL=AiplAstSpec.js.map