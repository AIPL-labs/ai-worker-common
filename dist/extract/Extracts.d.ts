export type BlobToString = (blob: Blob) => Promise<string | Error>;
export declare const BLOB_TEXT_EXTRACTORS: Record<string, BlobToString>;
export declare const blobToChunks: (blob: Blob, mediaType?: string) => Promise<string[] | Error>;
export declare const Extracts: {
    blobToChunks: (blob: Blob, mediaType?: string) => Promise<string[] | Error>;
};
//# sourceMappingURL=Extracts.d.ts.map