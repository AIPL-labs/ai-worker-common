import { DataObject } from "../data/DataObject";

export type AnswerDataObject = DataObject & { answer: string };

export const isAnswerDataObject = (maybe: unknown): maybe is AnswerDataObject => {
  const straw = maybe as AnswerDataObject;
  return typeof straw === "object" && typeof straw.answer === "string";
};
