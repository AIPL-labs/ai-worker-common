export const APP_OBJECT_TYPES = [
    "chat",
    "chat-message",
    "app-character",
    "ai-agent",
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
];
export const isAppObjectType = (maybe) => {
    const straw = maybe;
    return typeof straw === "string" && APP_OBJECT_TYPES.includes(straw);
};
//# sourceMappingURL=AppObject.js.map