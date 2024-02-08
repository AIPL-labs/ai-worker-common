import { AppReport } from "../app-report/AppReport";
import { TavernCardV2 } from "./TavernCardV2";
export type AppTavernCard = TavernCardV2<Partial<{
    direction: string;
    voiceId: string;
    reports: AppReport[];
    physicalDescription: string;
    genInfo: Partial<{
        imagePrompt: string;
    }>;
    functions: string[];
}>>;
export type AppCharacter = {
    id: string;
    card: AppTavernCard;
    imageDataId?: string;
};
//# sourceMappingURL=AppCharacter.d.ts.map