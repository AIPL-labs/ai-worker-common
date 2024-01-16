import { AccessUser } from "../../access/AccessUser";

export type ServiceProviders = {
  textgen: TextgenServiceProvider;
  imagegen: ServiceProvider;
  tts: ServiceProvider;
  proxy: ServiceProvider;
  crawl: ServiceProvider;
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

export const SERVICE_PROVIDER_API_SHAPES = [
  "CustomWc",
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
const isServiceProvider = (maybe: unknown): maybe is ServiceProvider => {
  const straw = maybe as ServiceProvider;
  return typeof straw === "object" && typeof straw.apiShape === "string";
};

export type TextgenServiceProvider = ServiceProvider & {
  contextSize?: number;
};

export const isTextgenServiceProvider = (
  maybe: unknown
): maybe is TextgenServiceProvider => {
  const straw = maybe as TextgenServiceProvider;
  return (
    typeof straw === "object" &&
    isServiceProvider(straw) &&
    typeof straw.contextSize === "number"
  );
};

export type AppUser = AccessUser & {
  userName: string;
  activeProfileId?: string;
};
