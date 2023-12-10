export const APP_OBJECT_TYPES = [
    "chat",
    "chat-message",
    "ai-character",
    "ai-agent",
    "user",
    "user-profile",
    "corpus",
    "corpus-document",
    "data-index",
    // "data",
    "voice",
    "vector-store",
];
export const isAppObjectType = (maybe) => {
    const straw = maybe;
    return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
//# sourceMappingURL=AppObject.js.map