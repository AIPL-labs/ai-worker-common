import type { ByteLike } from "@mjtdev/engine";
import type { TavernCardV2 } from "../type/app-character/TavernCardV2";
export declare const pngToTavernCardAndVoiceSample: (bytes: ByteLike | undefined, options?: Partial<{
    extraExtractions: ("voiceSample" | "videoPack" | "avatar3d")[];
}>) => Promise<Partial<{
    card: TavernCardV2;
    voiceSample: ArrayBuffer;
    videoPack: ArrayBuffer;
    avatar3d: ArrayBuffer;
}>>;
//# sourceMappingURL=pngToTavernCardAndVoiceSample.d.ts.map