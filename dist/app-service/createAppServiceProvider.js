import { uniqueId } from "../id/uniqueId";
export const createAppServiceProvider = (draft = {}) => {
    const { id = uniqueId("app-service-provider"), ...rest } = draft;
    return { id, ...rest };
};
//# sourceMappingURL=createAppServiceProvider.js.map