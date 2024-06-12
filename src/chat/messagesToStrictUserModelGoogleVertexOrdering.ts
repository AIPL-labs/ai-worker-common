import { isDefined, isEmpty, isUndefined, last } from "@mjtdev/engine";
import type { Content } from "../3rd/gcp/GcpTypes";


export const messagesToStrictUserModelGoogleVertexOrdering = (
  messages: Content[]
) => {
  const result: Content[] = [];
  const systemMessages = messages.filter((m) => m.role === "system");
  const nonSystemMessages = messages.filter((m) => m.role !== "system");
  for (const message of nonSystemMessages) {
    const lastMessage = last(result);
    if (isUndefined(lastMessage)) {
      result.push(message);
      continue;
    }
    if (message.role === lastMessage.role) {
      const combined = [lastMessage.parts[0].text, message.parts[0].text]
        .filter(isDefined)
        .join(" ");
      lastMessage.parts[0].text = combined;
      continue
    }
    result.push(message)
  }

  for (const message of result) {
    const text = message.parts[0].text;
    if (isUndefined(text) || isEmpty(text)) {
      message.parts[0].text = " ";
    }
  }

  return [...systemMessages, ...result];
};
