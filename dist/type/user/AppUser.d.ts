import { AccessUser } from "../access/AccessUser";
export type ServiceProviders = {
    textgen: TextgenServiceProvider;
    imagegen: ServiceProvider;
    tts: ServiceProvider;
    proxy: ServiceProvider;
    crawl: ServiceProvider;
    asr: ServiceProvider;
};
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
export declare const SERVICE_PROVIDER_API_SHAPES: readonly ["CustomWc", "OpenAi", "Cloudflare", "CustomOpenAi", "CustomTts", "CustomAsr", "BrowserTts"];
export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];
export type ServiceProvider = {
    apiShape: ApiShape;
    model?: string;
    baseUrl?: string;
    authToken?: string;
};
export type TextgenServiceProvider = ServiceProvider & {
    contextSize?: number;
};
export declare const isTextgenServiceProvider: (maybe: unknown) => maybe is TextgenServiceProvider;
export type AppUser = AccessUser & {
    userName: string;
};
//# sourceMappingURL=AppUser.d.ts.map