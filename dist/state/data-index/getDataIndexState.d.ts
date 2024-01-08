import { AppObject } from "../../type/app/AppObject";
import { DataIndex } from "../../type/data-index/DataIndex";
export declare const getDataIndexState: <T extends AppObject>(id: string, options?: Partial<{
    createIfNotFound: boolean;
}>) => DataIndex<T> | undefined;
//# sourceMappingURL=getDataIndexState.d.ts.map