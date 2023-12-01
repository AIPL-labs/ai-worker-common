import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";
export const createAppObject = (type, draft = {}) => {
    const creator = APP_OBJECT_CREATORS[type];
    if (!creator) {
        return undefined;
    }
    return creator(draft);
};
//# sourceMappingURL=createAppObject.js.map