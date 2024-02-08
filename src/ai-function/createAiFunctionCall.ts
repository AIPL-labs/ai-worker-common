import { uniqueId } from "../id/uniqueId";
import { AiFunctionCall } from "../type/ai-function/AiFunctions";

export const createAiFunctionCall = (
  draft: Partial<AiFunctionCall> = {}
): AiFunctionCall => {
  const { id = uniqueId("function-call"), name, args = {} } = draft;

  return { id, name, args };
};
