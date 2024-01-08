export const DEFAULT_USER_PROFILE = {
    chatIds: [],
    characterIds: [],
    name: "Default",
    providers: {
        imagegen: {
            apiShape: "CustomOpenAi",
        },
        textgen: {
            apiShape: "CustomOpenAi",
        },
        crawl: {
            apiShape: "CustomWc",
        },
        proxy: {
            apiShape: "Cloudflare",
        },
        tts: {
            apiShape: "CustomTts",
        },
    },
};
//# sourceMappingURL=DEFAULT_USER_PROFILE.js.map