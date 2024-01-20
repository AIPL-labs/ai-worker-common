import { uniqueId } from "../id/uniqueId";
export const createThought = (draft) => {
    const { id = uniqueId("thought"), texts = [], match, score = 0.5, image, documents = [], } = draft;
    return { id, texts, match, score, image, documents };
};
//# sourceMappingURL=createThought.js.map