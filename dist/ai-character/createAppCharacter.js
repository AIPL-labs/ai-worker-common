import { uniqueId } from "../id/uniqueId";
import { createTavernCard } from "./createTavernCard";
export const createAppCharacter = (draft = {}) => {
    const { id = uniqueId("app-character"), card = createTavernCard(), imageDataId, } = draft;
    return {
        id,
        card,
        imageDataId,
    };
};
//# sourceMappingURL=createAppCharacter.js.map