import { uniqueId } from "../id/uniqueId";
import { Thought } from "../type/thought/Thought";

export const createThought = (draft: Partial<Thought>): Thought => {
  const {
    id = uniqueId("thought"),
    text = "",
    score = 0.5,
    image,
    documents = [],
  } = draft;

  return { id, text, score, image, documents };
};
