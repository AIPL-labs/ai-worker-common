export declare const AppImages: {
    pngToTavernCardAndVoiceSample: (bytes: import("@mjtdev/engine").ByteLike | undefined, options?: Partial<{
        extraExtractions: ("voiceSample" | "videoPack" | "avatar3d")[];
    }>) => Promise<Partial<{
        card: import("..").TavernCardV2;
        voiceSample: ArrayBuffer;
        videoPack: ArrayBuffer;
        avatar3d: ArrayBuffer;
    }>>;
    pngToTavernCards: (bytes: import("@mjtdev/engine").ByteLike | undefined) => Promise<import("..").TavernCardV2[]>;
    decomposedAppCharacterToPng: ({ character, image, voiceSample, videos, avatar3d, }: import("..").DecomposedAppCharacter) => Promise<Blob>;
    jsonToTavernCardV2: (json: Partial<import("..").AppTavernCard>) => import("..").TavernCardV2 | undefined;
};
//# sourceMappingURL=AppImages.d.ts.map