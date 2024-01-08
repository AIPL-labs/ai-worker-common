import { uniqueId } from "../id/uniqueId";
import { TextExtraction } from "type/corpus/TextExtraction";

export const createTextExtraction = (
  draft: Partial<TextExtraction>
): TextExtraction => {
  const {
    id = uniqueId("text-extraction"),
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
