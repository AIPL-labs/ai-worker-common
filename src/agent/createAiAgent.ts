import { uniqueId } from "../id/uniqueId";
import { AiAgent } from "../type/ai-agent/AiBot";

export const createAiAgent = (draft: Partial<AiAgent> = {}): AiAgent => {
  const {
    id = uniqueId("ai-agent"),
    name = "Helpful AI Agent",
    chatIds = [],
    aiCharacterId,
    userCharacterId,
  } = draft;

  return {
    id,
    name,
    aiCharacterId,
    chatIds,
    userCharacterId,
  };
};
