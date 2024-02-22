export const upgradeServiceProviders = (providers = {}) => {
    const upgradedProviders = {
        imagegen: {
            apiShape: "CustomImagegen",
            ...(providers?.imagegen ?? {}),
        },
        textgen: {
            apiShape: "CustomOpenAi",
            ...(providers?.textgen ?? {}),
        },
        crawl: {
            apiShape: "CustomWc",
            ...(providers?.crawl ?? {}),
        },
        proxy: {
            apiShape: "Cloudflare",
            ...(providers?.proxy ?? {}),
        },
        tts: {
            apiShape: "CustomTts",
            ...(providers?.tts ?? {}),
        },
        asr: {
            apiShape: "CustomAsr",
            ...(providers?.asr ?? {}),
        },
    };
    return upgradedProviders;
};
//# sourceMappingURL=upgradeUserProfile.js.map