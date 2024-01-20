import { uniqueId } from "../id/uniqueId";
import { Thought } from "../type/thought/Thought";

export const createThought = (draft: Partial<Thought>): Thought => {
  const {
    id = uniqueId("thought"),
    texts = [],
    match,
    score = 0.5,
    image,
    documents = [],
  } = draft;

  return { id, texts, match, score, image, documents };
};
