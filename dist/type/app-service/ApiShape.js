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
    textgen: ["OpenAi", "CustomOpenAi"],
    tts: ["BrowserTts", "CustomTts", "ElevenlabsTts"],
    vector: [],
    extract: [],
    imagegen: ["Cloudflare", "CustomImagegen"],
    db: [],
    asr: ["CustomAsr"],
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
//# sourceMappingURL=ApiShape.js.map