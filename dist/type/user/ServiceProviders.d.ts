import { AppService } from "../app-service/AppService";
import { DataObject } from "../data/DataObject";
/** deprecated now a data-link */
export type ServiceProviders = Record<AppService["type"], AppServiceProvider> & {
    textgen: TextgenServiceProvider;
    tts: TtsServiceProvider;
};
export type ServiceProviderKind = keyof ServiceProviders;
export declare const SERVICE_PROVIDER_API_SHAPES: readonly ["CustomWc", "OpenAi", "CustomProxy", "Cloudflare", "CustomOpenAi", "BrowserTts", "CustomTts", "CustomImagegen", "ElevenlabsTts", "CustomAsr"];
export declare const SERVICE_TYPE_TO_API_SHAPES: Record<AppService["type"], (typeof SERVICE_PROVIDER_API_SHAPES)[number][]>;
export declare const APP_SERVICE_TYPES: ("tts" | "vector" | "extract" | "imagegen" | "unknown" | "proxy" | "crawl" | "asr" | "textgen" | "db")[];
export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];
export declare const SERVICE_PROVIDER_EXTRA_KEYS: Partial<Record<ServiceProviderKind, (keyof AppServiceProvider)[]>>;
export type CommonServiceProvider = {
    apiShape?: ApiShape;
    baseUrl?: string;
    authToken?: string;
};
export type CommonModelServiceProvider = CommonServiceProvider & {
    model?: string;
};
export type TextgenServiceProvider = CommonModelServiceProvider & {
    contextSize?: number;
    topP?: number;
};
export declare const isTextgenServiceProvider: (maybe: unknown) => maybe is TextgenServiceProvider;
export type TtsServiceProvider = CommonModelServiceProvider & {
    model?: string;
    stability?: number;
    similarityBoost?: number;
    useSpeakerBoost?: boolean;
    style?: string;
    /**  Each item should be in the range [50, 500]. */
    chunkLengthSchedule?: number[];
};
export type AppServiceProvider = DataObject & {
    type?: AppService["type"];
} & CommonModelServiceProvider & TextgenServiceProvider & TtsServiceProvider;
//# sourceMappingURL=ServiceProviders.d.ts.map