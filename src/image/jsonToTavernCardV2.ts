import { isUndefined } from "@mjtdev/engine";
import { AppTavernCard } from "../type/app-character/AppCharacter";
import { TavernCardV1 } from "../type/app-character/TavernCardV1";
import { TavernCardV2 } from "../type/app-character/TavernCardV2";

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
