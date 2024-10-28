import type { ByteLike } from "@mjtdev/engine";
import type { TavernCardV2 } from "../type/app-character/TavernCardV2";
export declare const pngToTavernCardAndVoiceSample: (bytes: ByteLike | undefined, options?: Partial<{
    extraExtractions: ("voiceSample" | "videoPack")[];
}>) => Promise<Partial<{
    card: TavernCardV2;
    voiceSample: ArrayBuffer;
    videoPack: ArrayBuffer;
}>>;
//# sourceMappingURL=pngToTavernCardAndVoiceSample.d.ts.map