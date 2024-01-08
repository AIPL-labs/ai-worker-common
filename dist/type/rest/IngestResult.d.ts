import { DataObject } from "../data/DataObject";
import { IngestRequest, IngestDataResult } from "./IngestRequest";
export type IngestResult = DataObject & {
    request?: IngestRequest;
    status: "STARTING" | "EXTRACTING-TEXT" | "EMBEDDING" | "COMPLETE";
    results: Record<string, IngestDataResult>;
};
export type DocumentEmbedding = DataObject & {};
//# sourceMappingURL=IngestResult.d.ts.map