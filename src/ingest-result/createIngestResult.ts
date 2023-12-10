import { uniqueId } from "../id/uniqueId";
import { IngestResult } from "../type/rest/IngestRequest";

export const createIngestResult = (
  draft: Partial<IngestResult>
): IngestResult => {
  const {
    id = uniqueId("ingest-result"),
    request,
    results = {},
    status = "STARTING",
  } = draft;

  return {
    id,
    request,
    results,
    status,
  };
};
