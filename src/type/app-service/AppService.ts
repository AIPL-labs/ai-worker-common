import type { DataObject } from "../data/DataObject";

export type AppService = DataObject & {
  host?: string;
  domain?: string;
  type:
    | "unknown"
    | "proxy"
    | "crawl"
    | "asr"
    | "textgen"
    | "tts"
    | "vector"
    | "extract"
    | "imagegen"
    | "db";
  enabled: boolean;
  count: number;
};

export type AppServiceNode = DataObject & {
  url?: string;
  status: "busy" | "ready" | "offline";
};

export type CommonServiceProvider = {
  apiShape?: ApiShape;
  baseUrl?: string;
  authToken?: string;
};

export type CommonModelServiceProvider = CommonServiceProvider & {
  model?: string;
};
const isServiceProvider = (maybe: unknown): maybe is AppServiceProvider => {
  const straw = maybe as AppServiceProvider;
  return typeof straw === "object" && typeof straw.apiShape === "string";
};

export type TextgenServiceProvider = CommonModelServiceProvider & {
  contextSize?: number;
  topP?: number;
  messageMode?: boolean;
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

export type AppServiceProvider = DataObject & {
  type?: AppService["type"];
} & CommonModelServiceProvider &
  TextgenServiceProvider &
  TtsServiceProvider;

/** @deprecated now a data-link */
export type ServiceProviders = Record<
  AppService["type"],
  AppServiceProvider
> & {
  textgen: TextgenServiceProvider;
  // imagegen: ServiceProvider;
  tts: TtsServiceProvider;
};

/** @deprecated now a data-link */
export type ServiceProviderKind = keyof ServiceProviders;

import { Objects } from "@mjtdev/engine";

export const APP_SERVICE_API_SHAPES = [
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

export const SERVICE_TYPE_TO_API_SHAPES: Record<
  AppService["type"],
  (typeof APP_SERVICE_API_SHAPES)[number][]
> = {
  textgen: ["OpenAi", "CustomOpenAi"],
  tts: ["BrowserTts", "CustomTts", "ElevenlabsTts"],
  vector: [],
  extract: [],
  imagegen: ["Cloudflare", "CustomImagegen"],
  db: [],
  asr: ["CustomAsr"],
  proxy: [],
  crawl: ["CustomWc"],
  unknown: [],
};

export const APP_SERVICE_TYPES = Objects.keys(SERVICE_TYPE_TO_API_SHAPES);

export type ApiShape = (typeof APP_SERVICE_API_SHAPES)[number];

export const SERVICE_PROVIDER_EXTRA_KEYS: Partial<
  Record<ServiceProviderKind, (keyof AppServiceProvider)[]>
> = {
  textgen: ["contextSize", "topP", "messageMode"],
  tts: [
    "stability",
    "similarityBoost",
    "useSpeakerBoost",
    "style",
    "chunkLengthSchedule",
  ],
};
