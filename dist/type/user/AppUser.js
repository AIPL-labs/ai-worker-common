export const SERVICE_PROVIDER_API_SHAPES = [
    "CustomWc",
    "OpenAi",
    "Cloudflare",
    "CustomOpenAi",
    "CustomTts",
    "BrowserTts",
];
const isServiceProvider = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.apiShape === "string";
};
export const isTextgenServiceProvider = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" &&
        isServiceProvider(straw) &&
        typeof straw.contextSize === "number");
};
//# sourceMappingURL=AppUser.js.map