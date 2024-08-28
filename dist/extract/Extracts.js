import { pdfToString } from "./pdfToString";
export const BLOB_TEXT_EXTRACTORS = {
    "application/pdf": pdfToString,
};
export const blobToChunks = async (blob, mediaType = blob.type) => {
    const extractor = BLOB_TEXT_EXTRACTORS[mediaType];
    if (!extractor) {
        return new Error(`No extractor for ${mediaType}`);
    }
    const text = await extractor(blob);
    if (text instanceof Error) {
        return [];
    }
    return text.split("\n");
};
export const Extracts = {
    blobToChunks,
};
//# sourceMappingURL=Extracts.js.map