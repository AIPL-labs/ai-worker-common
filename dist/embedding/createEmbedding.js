import { uniqueId } from "../id/uniqueId";
export const createEmbedding = (draft) => {
    const { id = uniqueId("text-extraction"), vectors = [] } = draft;
    return {
        id,
        vectors,
    };
};
//# sourceMappingURL=createEmbedding.js.map