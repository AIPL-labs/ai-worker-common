import { DataObject } from "../data/DataObject";
import { IngestRequest, IngestDataResult } from "../rest/IngestRequest";
export type TextExtraction = DataObject & {
    request?: IngestRequest;
    status: "STARTING" | "EXTRACTING-TEXT" | "EMBEDDING" | "COMPLETE";
    results: Record<string, IngestDataResult>;
};
//# sourceMappingURL=IngestResult.d.ts.map