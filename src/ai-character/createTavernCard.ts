import { AppTavernCard } from "../type/app-character/AppCharacter";

export const createTavernCard = (
  draft: Partial<AppTavernCard> = {}
): AppTavernCard => {
  const {
    data = {
      name: "New Character",
      extensions: {},
    },
    spec = "chara_card_v2",
    spec_version = "2.0",
  } = draft;

  return {
    data,
    spec,
    spec_version,
  };
};
