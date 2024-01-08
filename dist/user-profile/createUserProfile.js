import { uniqueId } from "../id/uniqueId";
export const createUserProfile = (draft) => {
    const { id = uniqueId("user-profile"), name = "New User Profile", providers = {
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
    }, asrConfig, userCharacterId, voiceId, } = draft;
    return {
        id,
        name,
        providers,
        asrConfig,
        userCharacterId,
        voiceId,
    };
};
//# sourceMappingURL=createUserProfile.js.map