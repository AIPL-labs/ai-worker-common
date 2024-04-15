import type { DataObject } from "../data/DataObject";

export type ChatAnswer = DataObject & { answer: string };

export const isChatAnswer = (maybe: unknown): maybe is ChatAnswer => {
  const straw = maybe as ChatAnswer;
  return typeof straw === "object" && typeof straw.answer === "string";
};
