export declare const Pngs: {
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
};
//# sourceMappingURL=Pngs.d.ts.map