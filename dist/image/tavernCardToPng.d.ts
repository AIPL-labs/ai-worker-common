import { ByteLike } from "@mjtdev/engine";
import { TavernCardV2 } from "../type/app-character/TavernCardV2";
export declare const decomposedAppCharacterToPng: ({ card, image, voice, }: {
    card: TavernCardV2;
    image: ByteLike;
    voice?: ByteLike | null | undefined;
}) => Promise<Blob>;
//# sourceMappingURL=tavernCardToPng.d.ts.map