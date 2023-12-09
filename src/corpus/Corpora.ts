import { uniqueId } from "../id/uniqueId";
import { Corpus, CorpusDocument } from "../type/corpus/Corpus";

export const createCorpus = (draft: Partial<Corpus>): Corpus => {
  const {
    id = uniqueId("corpus"),
    name = "Unamed",
    documentIdxId = uniqueId("data-index"),
  } = draft;

  return {
    id,
    name,
    documentIdxId,
  };
};

export const createCorpusDocument = (
  draft: Partial<CorpusDocument>
): CorpusDocument => {
  const {
    id = uniqueId("corpus-document"),
    name = "Unamed",
    dataId,
    mediaType,
    lastModified,
    size
  } = draft;

  return {
    id,
    name,
    dataId,
    mediaType,
    lastModified,
    size
  };
};

export const Corproa = { createCorpusDocument, createCorpus };
