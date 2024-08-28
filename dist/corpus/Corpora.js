import { uniqueId } from "../id/uniqueId";
export const createCorpus = (draft) => {
    const { id = uniqueId("corpus"), name = "Unamed", documentIdxId = uniqueId("data-index"), } = draft;
    return {
        id,
        name,
        documentIdxId,
    };
};
export const createCorpusDocument = (draft) => {
    const { id = uniqueId("corpus-document"), name = "Unamed", dataId, mediaType, lastModified, size, chunks, url, } = draft;
    return {
        id,
        name,
        dataId,
        mediaType,
        lastModified,
        size,
        chunks,
        url,
    };
};
export const Corproa = { createCorpusDocument, createCorpus };
//# sourceMappingURL=Corpora.js.map