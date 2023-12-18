import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { DataIndexRecordDeleteRequest } from "../../type/rest/DataIndexRecordDeleteRequest";
import { DataIndexRecordPushRequest } from "../../type/rest/DataIndexRecordPushRequest";
export declare const pushDataIndex: <T extends DataObject>(index: DataIndex<T>) => Promise<DataIndex<T> | undefined>;
export declare const pushDataIndexRecord: <T extends DataObject>({ indexId, record, }: DataIndexRecordPushRequest<T>) => Promise<DataIndex<T>>;
export declare const deleteDataIndexRecord: <T extends DataObject>({ indexId, recordId, }: DataIndexRecordDeleteRequest) => Promise<DataIndex<T>>;
//# sourceMappingURL=pushDataIndex.d.ts.map