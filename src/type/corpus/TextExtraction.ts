import type { DataObject } from "../data/DataObject";
import type { IngestRequest, IngestResult } from "../rest/IngestRequest";


export type TextExtraction = DataObject & {
  request?: IngestRequest;
  status: "STARTING" | "EXTRACTING-TEXT" | "EMBEDDING" | "COMPLETE";
  results: Record<string, IngestResult>;
};


