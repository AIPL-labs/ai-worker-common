import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { DataIndexRecordPushRequest } from "../../type/rest/DataIndexRecordPushRequest";
export declare const pushDataIndexRecord: <T extends DataObject>(params: DataIndexRecordPushRequest<T>) => Promise<DataIndex<T> | undefined>;
//# sourceMappingURL=pushDataIndexRecord.d.ts.map