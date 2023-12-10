import { uniqueId } from "../id/uniqueId";
import { VectorStore } from "../type/vector-store/VectorStore";

export const createVectorStore = (
  draft: Partial<VectorStore> = {}
): VectorStore => {
  const {
    id = uniqueId("vector-store"),
    name = "New Vector Store",
    corpusIds = [],
    ingestResultId = uniqueId("ingest-result"),
  } = draft;

  return { id, name, corpusIds, ingestResultId };
};
