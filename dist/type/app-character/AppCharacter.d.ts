import { AiFunction } from "../ai-function/AiFunctions";
import { AppReport } from "../app-report/AppReport";
import { TavernCardV2 } from "./TavernCardv2";
export type AppTavernCard = TavernCardV2<Partial<{
    direction: string;
    voiceId: string;
    reports: AppReport[];
    genInfo: {
        imagePrompt: string;
    };
}>>;
export type AppCharacter = {
    id: string;
    card: AppTavernCard;
    imageDataId?: string;
    capabilities?: AiCapability[];
};
export type AiCapability = keyof CapabilityToFunctionMapping;
export type CapabilityToFunctionMapping = {
    "update-character-image": {
        updateCharacterImage: AiFunction;
    };
};
//# sourceMappingURL=AppCharacter.d.ts.map