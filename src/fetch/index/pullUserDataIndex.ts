// import { AppObjectType } from "../../type/app/AppObject";
// import { DataIndex } from "../../type/data-index/DataIndex";
// import { DataObject } from "../../type/data/DataObject";
// import { DataIndexes } from "./DataIndexes";
// import { getUserDataIndexId } from "./getUserDataIndexId";

// export const pullUserDataIndex = async <T extends DataObject>(
//   objectType: AppObjectType,
//   userId: string,
//   options: Partial<{ createIfNotFound: boolean }> = {}
// ): Promise<DataIndex<T> | undefined> => {
//   const { createIfNotFound = false } = options;
//   if (!userId) {
//     return;
//   }
//   const idxId = getUserDataIndexId(userId, objectType);
//   const idx = await DataIndexes.pullDataIndex<T>(idxId);
//   if (!idx && createIfNotFound) {
//     return DataIndexes.pushDataIndex<T>({
//       id: idxId,
//       records: {},
//     });
//   }
//   return idx;
// };
