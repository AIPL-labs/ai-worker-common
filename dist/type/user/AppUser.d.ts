export type AppUserProfile = {
    id: string;
    name: string;
    userCharacterId?: string;
    providers: Partial<Record<ServiceName, ServiceProvider>>;
    chatIds: string[];
    characterIds: string[];
};
export declare const SERVICE_PROVIDER_SERVICE_NAMES: readonly ["textgen", "imagegen"];
export type ServiceName = (typeof SERVICE_PROVIDER_SERVICE_NAMES)[number];
export declare const SERVICE_PROVIDER_API_SHAPES: readonly ["OpenAi", "Cloudflare", "CustomOpenAi"];
export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];
export type ServiceProvider = {
    apiShape: ApiShape;
    model?: string;
    baseUrl?: string;
    authToken?: string;
};
export type AppUser = {
    id: string;
    userName: string;
    profiles: Record<string, AppUserProfile>;
};
//# sourceMappingURL=AppUser.d.ts.map