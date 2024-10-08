import { isDefined } from "@mjtdev/engine";
import type { AiplDecoratedValue } from "../aipl/runtime/AiplContext";
import type { ChatStateEntry } from "../type/chat-message/ChatMessage";

export const chatStateEntriesToDecoratedFacts = (
  chatDatas: Readonly<ChatStateEntry[]>
) => {
  const currentState: Record<string, AiplDecoratedValue<string | undefined>> = {
    date: { value: new Date().toLocaleDateString() },
    time: { value: new Date().toLocaleTimeString() },
  };
  const sorted = [...chatDatas].sort((a, b) => {
    return a.id.localeCompare(b.id);
  });

  for (const chatData of sorted) {
    const { namespace, key, value, node, contextName } = chatData;
    currentState[[namespace, key].filter(isDefined).join(".")] = {
      node,
      value,
      contextName,
    };
  }
  return currentState;
};
