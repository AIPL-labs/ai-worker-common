export type AppUserProfile = {
    id: string;
    name: string;
    providers: Record<string, ServiceProvider>;
};
export type ServiceName = "textgen" | "imagegen";
export type ApiShape = "OpenAi" | "Cloudflare" | "CustomOpenAi";
export type ServiceProvider = {
    serviceName: ServiceName;
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