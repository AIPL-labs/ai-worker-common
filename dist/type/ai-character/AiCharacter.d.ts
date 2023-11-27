import { TavernCardV2 } from "./TavernCardv2";
export type AiCharacter = {
    id: string;
    card: TavernCardV2<Partial<{
        genInfo: {
            imagePrompt: string;
        };
    }>>;
    image?: Blob;
};
//# sourceMappingURL=AiCharacter.d.ts.map