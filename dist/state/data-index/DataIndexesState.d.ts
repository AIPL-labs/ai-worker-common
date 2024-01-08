import { Idb } from "@mjtdev/engine";
import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
export declare const useDataIndexesState: import("@mjtdev/engine").State<{
    indexes: Record<string, DataIndex<DataObject>>;
}>, updateDataIndexesState: import("@mjtdev/engine").StateUpdater<{
    indexes: Record<string, DataIndex<DataObject>>;
}>, getDataIndexesState: import("@mjtdev/engine").StateGetter<{
    indexes: Record<string, DataIndex<DataObject>>;
}>;
export type DataIndexesStateType = ReturnType<typeof getDataIndexesState>;
export declare const DataIndexDB: Idb<DataIndexesStateType>;
export declare const loadDataIndexesState: (key?: string) => Promise<never>;
export declare const storeDataIndexesState: (key?: string) => void;
//# sourceMappingURL=DataIndexesState.d.ts.map