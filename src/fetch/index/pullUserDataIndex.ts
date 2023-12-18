import { AppObjectType } from "../../type/app/AppObject";
import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { DataIndexes } from "./DataIndexes";
import { getUserDataIndexId } from "./getUserDataIndexId";

export const pullUserDataIndex = async <T extends DataObject>(
  // name: string,
  objectType: AppObjectType,
  userId: string,
  options: Partial<{ createIfNotFound: boolean }> = {}
): Promise<DataIndex<T> | undefined> => {
  // const { id } = getUserState();
  const { createIfNotFound = false } = options;
  if (!userId) {
    return;
  }
  // const idxId = `${name}-${userId}`;
  const idxId = getUserDataIndexId(objectType, userId);
  const idx = await DataIndexes.pullDataIndex<T>(idxId);
  if (!idx && createIfNotFound) {
    return DataIndexes.pushDataIndex<T>({
      id: idxId,
      records: {},
    });
  }
  return idx;
};
