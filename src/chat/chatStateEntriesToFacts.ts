import { Objects } from "@mjtdev/engine";
import type { ChatStateEntry } from "../type/chat-message/ChatMessage";
import { chatStateEntriesToDecoratedFacts } from "./chatStateEntriesToDecoratedFacts";

export const chatStateEntriesToFacts = (
  chatDatas: Readonly<ChatStateEntry[]>
): Readonly<Record<string, string | undefined>> => {
  return Objects.fromEntries(
    Objects.entries(chatStateEntriesToDecoratedFacts(chatDatas)).map((e) => [
      e[0],
      e[1].value,
    ])
  );
};
