import { uniqueId } from "../id/uniqueId";
export const createThought = (draft) => {
    const { id = uniqueId("thought"), text = "", score = 0.5, image, documents = [], } = draft;
    return { id, text, score, image, documents };
};
//# sourceMappingURL=createThought.js.map