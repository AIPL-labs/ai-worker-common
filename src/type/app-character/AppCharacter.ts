import { AppReportQuestionnaire } from "../app-report/AppReport";
import { TavernCardV2 } from "./TavernCardV2";

export type AppTavernCard = TavernCardV2<
  Partial<{
    direction: string;
    voiceId: string;
    elevenLabsVoiceId: string;
    reports: AppReportQuestionnaire[];
    physicalDescription: string;
    genInfo: Partial<{
      imagePrompt: string;
    }>;
    functions: string[];
  }>
>;

export type AppCharacter = {
  id: string;
  card: AppTavernCard;
  imageDataId?: string;
};
