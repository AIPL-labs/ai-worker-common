export type BlobToString = (blob: Blob) => string | Error;
export declare const pdfToSTring: BlobToString;
export declare const BLOB_TEXT_EXTRACTORS: Record<string, BlobToString>;
export declare const blobToChunks: (blob: Blob) => string[] | Error;
export declare const DocChunks: {
    blobToChunks: (blob: Blob) => string[] | Error;
};
//# sourceMappingURL=DocChunks.d.ts.map