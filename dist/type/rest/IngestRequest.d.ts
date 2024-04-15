import type { DataObject } from "../data/DataObject";
export type IngestRequest = {
    enableOcr: boolean;
    dataIds: string[];
    namespaceId: string;
};
export type IngestResult = DataObject & {
    dataId?: string;
    errors: string[];
    ingestStartTime?: number;
    ingestEndTime?: number;
    text?: string;
    chunks: string[];
    vectors?: string[];
};
export type VectorizeVectorMutation = {
    ids: string[];
    count: number;
};
//# sourceMappingURL=IngestRequest.d.ts.map