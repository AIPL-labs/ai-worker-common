import { uniqueId } from "../id/uniqueId";
export const createAccessPointTheme = (draft) => {
    const { id = uniqueId("access-point-theme"), name, backgroundColor, color, } = draft;
    return {
        id,
        name,
        backgroundColor,
        color,
    };
};
//# sourceMappingURL=createAccessPointTheme.js.map