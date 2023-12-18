export type Corpus = {
  id: string;
  name: string;
  documentIdxId: string;
};

export type CorpusDocument = {
  id: string;
  name: string;
  mediaType?: string;
  dataId?: string;
  size?: number;
  lastModified?: number;
  chunks?: string[];
};
