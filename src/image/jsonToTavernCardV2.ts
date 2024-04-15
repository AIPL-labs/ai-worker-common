import { isUndefined } from "@mjtdev/engine";
import type { AppTavernCard } from "../type/app-character/AppCharacter";
import type { TavernCardV1 } from "../type/app-character/TavernCardV1";
import type { TavernCardV2 } from "../type/app-character/TavernCardV2";

export const jsonToTavernCardV2 = (
  json: Partial<AppTavernCard>
): TavernCardV2 | undefined => {
  if (isUndefined(json)) {
    return undefined;
  }
  if (json["spec"] === "chara_card_v2") {
    return json as TavernCardV2;
  }
  const v1 = json as TavernCardV1;
  return {
    spec: "chara_card_v2",
    spec_version: "2.0",
    data: {
      ...v1,
    },
  };
};
