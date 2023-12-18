import { AppObjectType } from "../../type/app/AppObject";
import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
export declare const pullUserDataIndex: <T extends DataObject>(objectType: AppObjectType, userId: string, options?: Partial<{
    createIfNotFound: boolean;
}>) => Promise<DataIndex<T> | undefined>;
//# sourceMappingURL=pullUserDataIndex.d.ts.map