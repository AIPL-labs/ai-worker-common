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
    const { id = uniqueId("corpus-document"), name = "Unamed", text = "", } = draft;
    return {
        id,
        name,
        text,
    };
};
export const Corproa = { createCorpusDocument, createCorpus };
//# sourceMappingURL=Corpora.js.map