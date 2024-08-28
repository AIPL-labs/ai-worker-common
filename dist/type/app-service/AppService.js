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
import { Objects } from "@mjtdev/engine";
export const APP_SERVICE_API_SHAPES = [
    "CustomWc",
    "OpenAi",
    "CustomProxy",
    "Cloudflare",
    "CustomOpenAi",
    "BrowserTts",
    "CustomTts",
    "CustomImagegen",
    "ElevenlabsTts",
    "CustomAsr",
    "GoogleVertex",
];
export const SERVICE_TYPE_TO_API_SHAPES = {
    textgen: ["OpenAi", "CustomOpenAi", "GoogleVertex"],
    tts: ["BrowserTts", "CustomTts", "ElevenlabsTts"],
    vector: [],
    extract: [],
    imagegen: ["Cloudflare", "CustomImagegen"],
    db: [],
    asr: ["CustomAsr", "GoogleVertex"],
    proxy: [],
    crawl: ["CustomWc"],
    unknown: [],
    lipsync: [],
};
export const APP_SERVICE_TYPES = Objects.keys(SERVICE_TYPE_TO_API_SHAPES);
export const SERVICE_PROVIDER_EXTRA_KEYS = {
    textgen: ["contextSize", "topP", "messageMode"],
    tts: [
        "stability",
        "similarityBoost",
        "useSpeakerBoost",
        "style",
        "chunkLengthSchedule",
    ],
};
//# sourceMappingURL=AppService.js.map