import { isUndefined } from "@mjtdev/engine";
export const jsonToTavernCardV2 = (json) => {
    if (isUndefined(json)) {
        return undefined;
    }
    if (json["spec"] === "chara_card_v2") {
        return json;
    }
    const v1 = json;
    return {
        spec: "chara_card_v2",
        spec_version: "2.0",
        data: {
            ...v1,
        },
    };
};
//# sourceMappingURL=jsonToTavernCardV2.js.map