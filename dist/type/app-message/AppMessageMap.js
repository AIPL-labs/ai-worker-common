export const isAbortableMessageDetail = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.abortId === "string";
};
export const isReturnableMessageDetail = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.returnId === "string";
};
export const isStreamableMessageDetail = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.streamId === "string";
};
//# sourceMappingURL=AppMessageMap.js.map