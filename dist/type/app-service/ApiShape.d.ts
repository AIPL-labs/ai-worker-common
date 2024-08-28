import { AppService, ServiceProviderKind, AppServiceProvider } from "./AppService";
export declare const APP_SERVICE_API_SHAPES: readonly ["CustomWc", "OpenAi", "CustomProxy", "Cloudflare", "CustomOpenAi", "BrowserTts", "CustomTts", "CustomImagegen", "ElevenlabsTts", "CustomAsr", "GoogleVertex"];
export declare const SERVICE_TYPE_TO_API_SHAPES: Record<AppService["type"], (typeof APP_SERVICE_API_SHAPES)[number][]>;
export declare const APP_SERVICE_TYPES: ("unknown" | "proxy" | "crawl" | "asr" | "textgen" | "tts" | "vector" | "extract" | "imagegen" | "lipsync" | "db")[];
export type ApiShape = (typeof APP_SERVICE_API_SHAPES)[number];
export declare const SERVICE_PROVIDER_EXTRA_KEYS: Partial<Record<ServiceProviderKind, (keyof AppServiceProvider)[]>>;
//# sourceMappingURL=ApiShape.d.ts.map