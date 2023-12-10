import { pdfToString } from "./pdfToString";

export type BlobToString = (blob: Blob) => Promise<string | Error>;

export const BLOB_TEXT_EXTRACTORS: Record<string, BlobToString> = {
  "application/pdf": pdfToString,
};

export const blobToChunks = async (
  blob: Blob,
  mediaType = blob.type
): Promise<string[] | Error> => {
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
