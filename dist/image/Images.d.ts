export declare const Images: {
    pngToTavernCardAndVoiceSample: (bytes: import("@mjtdev/engine").ByteLike | undefined) => Promise<Partial<{
        card: import("..").TavernCardV2;
        voiceSample: ArrayBuffer;
    }>>;
    pngToTavernCards: (bytes: import("@mjtdev/engine").ByteLike | undefined) => Promise<import("..").TavernCardV2[]>;
    tavernCardToPng: ({ card, image, voice, }: {
        card: import("..").TavernCardV2;
        image: import("@mjtdev/engine").ByteLike;
        voice?: import("@mjtdev/engine").ByteLike | null | undefined;
    }) => Promise<Blob>;
    jsonToTavernCardV2: (json: Partial<import("..").AppTavernCard>) => import("..").TavernCardV2 | undefined;
};
//# sourceMappingURL=Images.d.ts.map