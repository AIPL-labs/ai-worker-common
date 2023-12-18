import { DataObject } from "../data/DataObject";

export type DataIndex<T extends DataObject = DataObject> = DataObject & {
  records: Record<string, T>;
};
