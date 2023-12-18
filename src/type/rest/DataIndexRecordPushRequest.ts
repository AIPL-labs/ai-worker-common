import { DataObject } from "../data/DataObject";

export type DataIndexRecordPushRequest<T extends DataObject = DataObject> = {
  indexId: string;
  record: T;
};
