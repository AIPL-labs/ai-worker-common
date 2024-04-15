import type { DataObject } from "../data/DataObject";

export type DataIndex<T extends DataObject = DataObject> = DataObject & {
  records: Record<string, T>;
};

export const isDataIndex = (maybe: unknown): maybe is DataIndex => {
  const straw = maybe as DataIndex;
  return (
    typeof straw === "object" &&
    typeof straw.id === "string" &&
    typeof straw.records === "object"
  );
};
