export const pdfToSTring = () => {
    return "";
};
export const BLOB_TEXT_EXTRACTORS = {
    "application/pdf": pdfToSTring,
};
export const blobToChunks = (blob) => {
    const extractor = BLOB_TEXT_EXTRACTORS[blob.type];
    if (!extractor) {
        return new Error(`No extractor for ${blob.type}`);
    }
    const text = extractor(blob);
    if (text instanceof Error) {
        return [];
    }
    return text.split("\n");
};
export const DocChunks = {
    blobToChunks,
};
//# sourceMappingURL=DocChunks.js.map