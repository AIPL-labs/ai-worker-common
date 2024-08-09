import type { ByteLike } from "@mjtdev/engine";
import type { AppReportQuestionnaire } from "../app-report/AppReport";
import type { CustomVoiceStyle } from "../voice/AppVoice";
import type { TavernCardV2 } from "./TavernCardV2";

export type AppCharacterVoice = Partial<{
  elevenLabsVoiceId: string;
  style: Partial<CustomVoiceStyle>;
}>;

export type DecomposedAppCharacter = {
  character: AppCharacter;
  image?: ByteLike;
  videos?: Record<string, ByteLike | undefined>;
  voiceSample?: ByteLike;
  activeGroupId?: string;
  // accessPublic?: boolean;
};

// export type FormSkillConfig = {
//   formKeyToSelector: Record<string, string>;
//   formKeyToValues: Record<string, string[]>;
//   formKeyToInputValueType: Record<string, "single" | "multiple">;
// };

export type FormSkillConfig = Record<string, FormSkillConfigKeyValue>;

export type FormSkillConfigKeyValue = {
  selector: string;
  values: string[];
  inputValueType: "single" | "multiple";
};

export type AppTavernCard = TavernCardV2<
  Partial<{
    direction: string;
    reports: AppReportQuestionnaire[];
    starters: string[];
    chatEnd: string;
    preChat: string;
    physicalDescription: string;
    genInfo: Partial<{
      imagePrompt: string;
    }>;
    functions: string[];
    voice: AppCharacterVoice;
    trueName: string;
    formSkillConfigs: Record<string, FormSkillConfig>;
  }>
>;

export type AppCharacterFieldName = keyof AppCharacter["card"]["data"];

export type AppCharacter = {
  id: string;
  card: AppTavernCard;
  imageDataId?: string;
};
