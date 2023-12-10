import { DataObject } from "../data/DataObject";

export type VectorStore = DataObject & {
  name: string;
  corpusIds: string[];
  ingestResultId: string;
};
