import { AiFunction } from "../ai-function/AiFunctions";
import { TavernCardV2 } from "./TavernCardv2";
export type AppTavernCard = TavernCardV2<Partial<{
    direction: string;
    voiceId: string;
    genInfo: {
        imagePrompt: string;
    };
}>>;
export type AppCharacter = {
    id: string;
    card: AppTavernCard;
    image?: Blob;
    capabilities?: AiCapability[];
};
export type AiCapability = keyof CapabilityToFunctionMapping;
export type CapabilityToFunctionMapping = {
    "update-character-image": {
        updateCharacterImage: AiFunction;
    };
};
//# sourceMappingURL=AppCharacter.d.ts.map