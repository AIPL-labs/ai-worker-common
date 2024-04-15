import type { ApiShape } from "../app-service/AppService";
import type { DataObject } from "../data/DataObject";

export type CustomVoiceStyle = {
  alpha: number;
  beta: number;
  steps: number;
  scale: number;
  sampleRate: number;
};

export type CustomTtsRequest = CustomVoiceStyle & {
  text: string;
  voiceSample: string;
};

export type AppVoice = DataObject & {
  name?: string;
  apiShape: ApiShape;
};
