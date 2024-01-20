import { DataObject } from "../data/DataObject";
import { VectorSearchResultItem } from "../vector/VectorSearchResultItem";

export type Thought = DataObject & {
  texts: string[];
  score: number;
  match?: VectorSearchResultItem;
  image?: string;
  documents: string[];
};
