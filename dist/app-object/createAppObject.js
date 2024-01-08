import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";
export const createAppObject = (type, draft = {}) => {
    const creator = APP_OBJECT_CREATORS[type];
    if (!creator) {
        throw new Error(`no AppObject creator: ${type}`);
    }
    return creator(draft);
};
//# sourceMappingURL=createAppObject.js.map