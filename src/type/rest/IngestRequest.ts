import { DataObject } from "../data/DataObject";

export type IngestRequest = {
  enableOcr: boolean;
  dataIds: string[];
  namespaceId: string;
};

export type IngestResult = DataObject & {
  dataId?: string; // use dataId as _parentId_ for DataLink?
  errors: string[];
  ingestStartTime?: number;
  ingestEndTime?: number;
  text?: string;
  chunks: string[];
  vectors?: string[];
};

export type VectorizeVectorMutation = {
  /* List of ids of vectors that were successfully processed. */
  ids: string[];
  /* Total count of the number of processed vectors. */
  count: number;
};
