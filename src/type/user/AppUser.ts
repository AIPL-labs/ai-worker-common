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

export const SERVICE_PROVIDER_API_SHAPES = [
  "CustomWc",
  "OpenAi",
  "CustomProxy",
  "Cloudflare",
  "CustomOpenAi",
  "BrowserTts",
  "CustomTts",
  "CustomImagegen",
  "ElevenlabsTts",
  "CustomAsr",
] as const;

export type ApiShape = (typeof SERVICE_PROVIDER_API_SHAPES)[number];

export const SERVICE_PROVIDER_EXTRA_KEYS: Partial<
  Record<ServiceProviderKind, (keyof ServiceProvider)[]>
> = {
  textgen: ["contextSize", "topP"],
  tts: [
    "stability",
    "similarityBoost",
    "useSpeakerBoost",
    "style",
    "chunkLengthSchedule",
  ],
};

export type CommonServiceProvider = {
  apiShape: ApiShape;
  baseUrl?: string;
  authToken?: string;
};

export type CommonModelServiceProvider = CommonServiceProvider & {
  model?: string;
};

const isServiceProvider = (maybe: unknown): maybe is ServiceProvider => {
  const straw = maybe as ServiceProvider;
  return typeof straw === "object" && typeof straw.apiShape === "string";
};

export type TextgenServiceProvider = CommonModelServiceProvider & {
  contextSize?: number;
  topP?: number;
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

export type TtsServiceProvider = CommonModelServiceProvider & {
  model?: string;
  stability?: number; // Defines the stability for voice settings.
  similarityBoost?: number; // Defines the similarity boost for voice settings.
  useSpeakerBoost?: boolean; // Defines the use speaker boost for voice settings. This parameter is available on V2+ models.
  style?: string; // Defines the style for voice settings. This parameter is available on V2+ models.

  /**  Each item should be in the range [50, 500]. */
  chunkLengthSchedule?: number[]; // Determines how text is chunked for processing. Default: [120, 160, 250, 290].
};

export type AppUser = AccessUser & {
  userName: string;
};

export type ServiceProvider = CommonModelServiceProvider &
  TextgenServiceProvider &
  TtsServiceProvider;
