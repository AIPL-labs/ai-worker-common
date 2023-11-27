export type AppUserProfile = {
  id: string;
  name: string;
  userCharacterId?: string;
  providers: Partial<Record<ServiceName, ServiceProvider>>;
  chatIds: string[];
  characterIds: string[];
};

export const SERVICE_PROVIDER_SERVICE_NAMES = ["textgen", "imagegen"] as const;
export type ServiceName = (typeof SERVICE_PROVIDER_SERVICE_NAMES)[number];

export const SERVICE_PROVIDER_API_SHAPES = [
  "OpenAi",
  "Cloudflare",
  "CustomOpenAi",
] as const;

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
