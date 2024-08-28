import { isUndefined } from "@mjtdev/engine";
import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";
import { createDefaultAppObject } from "./createDefaultAppObject";
export const createAppObject = (type, draft = {}) => {
    const creator = APP_OBJECT_CREATORS[type];
    if (isUndefined(creator)) {
        return createDefaultAppObject(type, draft);
    }
    return creator(draft);
};
//# sourceMappingURL=createAppObject.js.map