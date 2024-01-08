import { Apps } from "../../app/Apps";
import { getDataIndexState } from "./getDataIndexState";
export const pushDataIndexState = (id) => {
    const idx = getDataIndexState(id);
    if (!idx) {
        Apps.error(`No data index: ${id}`);
        return;
    }
};
//# sourceMappingURL=pushDataIndexState.js.map