export const isAbortableMessageDetail = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.abortId === "string";
};
export const isReturnableMessageDetail = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.returnId === "string";
};
//# sourceMappingURL=AppMessageMap.js.map