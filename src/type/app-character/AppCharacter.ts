import type { ByteLike } from "@mjtdev/engine";
import type { AppReportQuestionnaire } from "../app-report/AppReport";
import type { CustomVoiceStyle } from "../voice/AppVoice";
import type { TavernCardV2 } from "./TavernCardV2";

export type AppCharacterVoice = Partial<{
  elevenLabsVoiceId: string;
  // sampleB64: string;
  style: Partial<CustomVoiceStyle>;
}>;

export type DecomposedAppCharacter = {
  character: AppCharacter;
  image?: ByteLike;
  voiceSample?: ByteLike;
};

export type AppTavernCard = TavernCardV2<
  Partial<{
    direction: string;
    // voiceId: string;
    reports: AppReportQuestionnaire[];
    physicalDescription: string;
    genInfo: Partial<{
      imagePrompt: string;
    }>;
    functions: string[];
    voice: AppCharacterVoice;
    /** @deprecated */
    elevenLabsVoiceId: string;
  }>
>;

export type AppCharacterFieldName = keyof AppCharacter["card"]["data"];

export type AppCharacter = {
  id: string;
  card: AppTavernCard;
  imageDataId?: string;
};
