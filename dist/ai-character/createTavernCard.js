export const createTavernCard = (draft = {}) => {
    const { data = {}, spec, spec_version } = draft;
    return {
        data,
        spec: "chara_card_v2",
        spec_version: "2.0",
    };
};
//# sourceMappingURL=createTavernCard.js.map