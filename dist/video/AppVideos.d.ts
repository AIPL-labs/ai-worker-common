import { type ByteLike } from "@mjtdev/engine";
export declare const videoPackToVideoRecords: (videoPack?: ArrayBuffer) => Record<string, ArrayBuffer>;
export declare const videoRecordsToVideoPack: (videoRecords?: Record<string, ByteLike | undefined>) => Uint8Array;
export declare const AppVideos: {
    videoPackToVideoRecords: (videoPack?: ArrayBuffer) => Record<string, ArrayBuffer>;
    videoRecordsToVideoPack: (videoRecords?: Record<string, ByteLike | undefined>) => Uint8Array;
};
//# sourceMappingURL=AppVideos.d.ts.map