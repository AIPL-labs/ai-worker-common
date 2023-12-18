import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { getBackendDataObject } from "../data/getBackendDataObject";

export const pullDataIndex = <T extends DataObject = DataObject>(
  id: string
): Promise<DataIndex<T> | undefined> => {
  return getBackendDataObject<DataIndex<T>>(id);
};
