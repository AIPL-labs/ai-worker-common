import { uniqueId } from "../id/uniqueId";
import { createTavernCard } from "./createTavernCard";
export const createAppCharacter = (draft = {}) => {
    const { id = uniqueId("app-character"), card = createTavernCard(), image, } = draft;
    return {
        id,
        card,
        image,
    };
};
//# sourceMappingURL=createAiCharacter.js.map