import { AppReportQuestionnaire } from "../app-report/AppReport";
import { TavernCardV2 } from "./TavernCardV2";

export type AppTavernCard = TavernCardV2<
  Partial<{
    direction: string;
    voiceId: string;
    elevenLabsVoiceId: string;
    reports: AppReportQuestionnaire[];
    physicalDescription: string;
    aipl: string;
    genInfo: Partial<{
      imagePrompt: string;
    }>;
    functions: string[];
  }>
>;

export type AppCharacterFieldName = keyof AppCharacter["card"]["data"];

export type AppCharacter = {
  id: string;
  card: AppTavernCard;
  imageDataId?: string;
};
