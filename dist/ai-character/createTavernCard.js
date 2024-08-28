export const createTavernCard = (draft = {}) => {
    const { data = {
        name: "New Character",
        extensions: {},
    }, spec = "chara_card_v2", spec_version = "2.0", } = draft;
    return {
        data,
        spec,
        spec_version,
    };
};
//# sourceMappingURL=createTavernCard.js.map