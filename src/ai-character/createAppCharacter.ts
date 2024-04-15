import { uniqueId } from "../id/uniqueId";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import { createTavernCard } from "./createTavernCard";

export const createAppCharacter = (
  draft: Partial<AppCharacter> = {}
): AppCharacter => {
  const {
    id = uniqueId("app-character"),
    card = createTavernCard(),
    imageDataId,
  } = draft;
  return {
    id,
    card,
    imageDataId,
  };
};
