import type { DataObject } from "../data/DataObject";
import type { VectorSearchResultItem } from "../vector/VectorSearchResultItem";

export type Thought = DataObject & {
  texts: string[];
  score: number;
  match?: VectorSearchResultItem;
  image?: string;
  documents: string[];
};
