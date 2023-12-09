import { AppObject } from "../app/AppObject";
export type DataIndex<T extends AppObject = any> = {
    id: string;
    records: Record<string, T>;
};
//# sourceMappingURL=DataIndex.d.ts.map