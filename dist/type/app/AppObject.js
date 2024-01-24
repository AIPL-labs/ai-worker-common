export const APP_OBJECT_TYPES = [
    "chat",
    "chat-message",
    "app-character",
    "app-user",
    "user-profile",
    "corpus",
    "corpus-document",
    "data-index",
    // "data",
    "voice",
    "text-extraction",
    "ingest-result",
    "phone-call",
    "thought",
    "access-point",
    "app-interface",
];
export const isAppObjectType = (maybe) => {
    const straw = maybe;
    return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
//# sourceMappingURL=AppObject.js.map