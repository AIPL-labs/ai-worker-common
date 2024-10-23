import type { ByteLike } from "@mjtdev/engine";
import type { AppReportQuestionnaire } from "../app-report/AppReport";
import type { CustomVoiceStyle } from "../voice/AppVoice";
import type { TavernCardV2 } from "./TavernCardV2";
import type { TypeInfoSchema } from "@mjtdev/engine/packages/mjtdev-object";
export type AppCharacterVoice = Partial<{
    elevenLabsVoiceId: string;
    style: Partial<CustomVoiceStyle>;
}>;
export type DecomposedAppCharacter = {
    character: AppCharacter;
    image?: ByteLike;
    videos?: Record<string, ByteLike | undefined>;
    voiceSample?: ByteLike;
    avatar3d?: ByteLike;
    activeGroupId?: string;
};
export type ToolConfig = {
    schema: TypeInfoSchema;
    current?: Record<string, string | string[]>;
};
export type FormSkillConfig = Record<string, FormSkillConfigKeyValue>;
export type FormSkillConfigKeyValue = {
    selector: string;
    values: string[];
    inputValueType: "single" | "multiple" | "text" | "video";
    description: string;
};
export type AppTavernCard = TavernCardV2<Partial<{
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
}>>;
export type AppCharacterFieldName = keyof AppCharacter["card"]["data"];
export type AppCharacter = {
    id: string;
    card: AppTavernCard;
    imageDataId?: string;
};
//# sourceMappingURL=AppCharacter.d.ts.map