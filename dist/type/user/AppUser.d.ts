import { AccessUser } from "../access/AccessUser";
export type ServiceProviders = {
    textgen: TextgenServiceProvider;
    imagegen: ServiceProvider;
    tts: TtsServiceProvider;
    proxy: ServiceProvider;
    crawl: ServiceProvider;
    asr: ServiceProvider;
};
export type ServiceProviderKind = keyof ServiceProviders;
export type AsrConfig = {
    pauseToListenMs: number;
};
export type AppUserProfile = {
    id: string;
    name: string;
    userCharacterId?: string;
    aiCharacterId?: string;
    providers: ServiceProviders;
    voiceId?: string;
    asrConfig?: AsrConfig;
};
export declare const SERVICE_PROVIDER_API_SHAPES: readonly ["CustomWc", "OpenAi", "CustomProxy", "Cloudflare", "CustomOpenAi", "BrowserTts", "CustomTts", "CustomImagegen", "ElevenlabsTts", "CustomAsr"];
export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];
export declare const SERVICE_PROVIDER_EXTRA_KEYS: Partial<Record<ServiceProviderKind, (keyof ServiceProvider)[]>>;
export type CommonServiceProvider = {
    apiShape: ApiShape;
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
export type AppUser = AccessUser & {
    userName: string;
};
export type ServiceProvider = CommonModelServiceProvider & TextgenServiceProvider & TtsServiceProvider;
//# sourceMappingURL=AppUser.d.ts.map