import { uniqueId } from "../id/uniqueId";
import type { IngestResult } from "../type/rest/IngestRequest";

export const createIngestResult = (
  draft: Partial<IngestResult>
): IngestResult => {
  const {
    id = uniqueId("ingest-result"),

    chunks = [],
    dataId,
    errors = [],
    ingestEndTime,
    ingestStartTime,
    text,
    vectors,
  } = draft;

  return {
    id,
    chunks,
    dataId,
    errors,
    ingestEndTime,
    ingestStartTime,
    text,
    vectors,
  };
};
