import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { putBackendDataObject } from "../data/putBackendDataObject";

export const pushDataIndex = async <T extends DataObject>(
  index: DataIndex<T>
) => {
  const resp = await putBackendDataObject(index);
  if (!resp.ok) {
    console.error(resp);
    return undefined;
  }
  return index;
};


