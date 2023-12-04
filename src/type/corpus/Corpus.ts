export type Corpus = {
  id: string;
  name: string;
  // documentIds: string[];
  documentIdxId: string;
};

export type CorpusDocument = {
  id: string;
  text: string;
  name: string;
};
