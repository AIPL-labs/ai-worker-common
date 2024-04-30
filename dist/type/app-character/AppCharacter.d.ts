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
    voiceSample?: ByteLike;
};
export type AppTavernCard = TavernCardV2<Partial<{
    direction: string;
    reports: AppReportQuestionnaire[];
    starters: string[];
    chatEnd: string;
    physicalDescription: string;
    genInfo: Partial<{
        imagePrompt: string;
    }>;
    functions: string[];
    voice: AppCharacterVoice;
}>>;
export type AppCharacterFieldName = keyof AppCharacter["card"]["data"];
export type AppCharacter = {
    id: string;
    card: AppTavernCard;
    imageDataId?: string;
};
//# sourceMappingURL=AppCharacter.d.ts.map