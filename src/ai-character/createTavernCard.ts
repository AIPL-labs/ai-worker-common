import { AppTavernCard } from "../type/app-character/AppCharacter";

export const createTavernCard = (
  draft: Partial<AppTavernCard> = {}
): AppTavernCard => {
  const { data = {}, spec, spec_version } = draft;

  return {
    data,
    spec: "chara_card_v2",
    spec_version: "2.0",
  };
};
