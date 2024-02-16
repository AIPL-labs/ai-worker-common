import { uniqueId } from "../id/uniqueId";
import { FunctionCallResult } from "../type/chat-message/ChatMessage";


export const createFunctionCallResult = (
  draft: Partial<FunctionCallResult> = {}
): FunctionCallResult => {
  const {
    id = uniqueId("function-call-result"), call, prompt, type, value,
  } = draft;
  if (!call || !type || !value) {
    throw new Error("call type and value are required");
  }

  return { id, call, prompt, type, value };
};
