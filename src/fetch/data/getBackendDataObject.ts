import { DataObject } from "../../type/data/DataObject";
import { getBackendData } from "./getBackendData";

export const getBackendDataObject = async <T extends DataObject = DataObject>(
  id: string
): Promise<T | undefined> => {
  const resp = await getBackendData(id);
  if (!resp.ok) {
    return undefined;
  }
  return resp.json();
};
