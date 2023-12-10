import { DataObject } from "../data/DataObject";

export type IngestRequest = {
  enableOcr: boolean;
  dataIds: string[];
  resultDataId: string;
};

export type IngestDataResult = {
  dataId: string;
  errors: string[];
  ingestStartTime?: number;
  ingestEndTime?: number;
  text?: string;
  chunks: string[];
  embeds?: VectorizeVectorMutation;
};

export type VectorizeVectorMutation = {
  /* List of ids of vectors that were successfully processed. */
  ids: string[];
  /* Total count of the number of processed vectors. */
  count: number;
};

export type IngestResult = DataObject & {
  request?: IngestRequest;
  status: "STARTING" | "EXTRACTING-TEXT" | "EMBEDDING" | "COMPLETE";
  results: Record<string, IngestDataResult>;
};
