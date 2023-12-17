import { AccessUser } from "../../access/AccessUser";

export type ServiceProviders = {
  textgen: ServiceProvider;
  imagegen: ServiceProvider;
  tts: ServiceProvider;
  proxy: ServiceProvider;
};

export type AsrConfig = {
  pauseToListenMs: number;
};

export type AppUserProfile = {
  id: string;
  name: string;
  userCharacterId?: string;
  providers: ServiceProviders;
  chatIds: string[];
  characterIds: string[];
  voiceId?: string;
  asrConfig?: AsrConfig;
};

export const SERVICE_PROVIDER_API_SHAPES = [
  "OpenAi",
  "Cloudflare",
  "CustomOpenAi",
  "CustomTts",
  "BrowserTts",
] as const;

export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];

export type ServiceProvider = {
  apiShape: ApiShape;
  model?: string;
  baseUrl?: string;
  authToken?: string;
};

export type AppUser = AccessUser & {
  id: string;
  profiles: Record<string, AppUserProfile>;
};
