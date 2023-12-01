import { AccessUser } from "../../access/AccessUser";

export type ServiceProviders = {
  textgen: ServiceProvider;
  imagegen: ServiceProvider;
};

export type TtsConfig = {
  selectedVoice: number;
  pitch: number;
  rate: number;
  delay: number;
};

export type AppUserProfile = {
  id: string;
  name: string;
  userCharacterId?: string;
  providers: ServiceProviders;
  chatIds: string[];
  characterIds: string[];
  ttsConfig?: TtsConfig;
};

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

export type AppUser = AccessUser & {
  id: string;
  profiles: Record<string, AppUserProfile>;
};
