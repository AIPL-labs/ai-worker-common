import { uniqueId } from "../id/uniqueId";
export const createAccessPoint = (draft) => {
    const { id = uniqueId("access-point"), name = "Access Point" } = draft;
    return {
        id,
        name,
    };
};
//# sourceMappingURL=createAccessPoint.js.map