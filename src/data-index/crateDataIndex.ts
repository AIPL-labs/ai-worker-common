import { uniqueId } from "../id/uniqueId";
import { DataIndex } from "../type/data-index/DataIndex";

export const createDataIndex = (draft: Partial<DataIndex> = {}): DataIndex => {
  const { id = uniqueId("data-index"), records = {} } = draft;
  return { id, records };
};
