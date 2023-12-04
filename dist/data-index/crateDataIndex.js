import { uniqueId } from "../id/uniqueId";
export const createDataIndex = (draft = {}) => {
    const { id = uniqueId("data-index"), records = {} } = draft;
    return { id, records };
};
//# sourceMappingURL=crateDataIndex.js.map