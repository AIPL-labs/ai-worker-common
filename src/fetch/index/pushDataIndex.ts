import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { DataIndexRecordDeleteRequest } from "../../type/rest/DataIndexRecordDeleteRequest";
import { DataIndexRecordPushRequest } from "../../type/rest/DataIndexRecordPushRequest";
import { putBackendDataObject } from "../data/putBackendDataObject";

export const pushDataIndex = async <T extends DataObject>(
  index: DataIndex<T>
) => {
  const resp = await putBackendDataObject(index);
  if (!resp.ok) {
    return undefined;
  }
  return index;
};

export const pushDataIndexRecord = async <T extends DataObject>({
  indexId,
  record,
}: DataIndexRecordPushRequest<T>): Promise<DataIndex<T>> => {
  throw "TBD";
};

export const deleteDataIndexRecord = async <T extends DataObject>({
  indexId,
  recordId,
}: DataIndexRecordDeleteRequest): Promise<DataIndex<T>> => {
  throw "TBD";
};
