import { AppObject } from "../../type/app/AppObject";
import { DataIndex } from "../../type/data-index/DataIndex";
export declare const useDataIndexState: <T extends AppObject>(id: string, options?: Partial<{
    createIfNotFound: boolean;
}>) => DataIndex<T> | undefined;
//# sourceMappingURL=useDataIndexState.d.ts.map