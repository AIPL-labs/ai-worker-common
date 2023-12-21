import { putBackendDataObject } from "../data/putBackendDataObject";
export const pushDataIndex = async (index) => {
    const resp = await putBackendDataObject(index);
    if (!resp.ok) {
        console.error(resp);
        return undefined;
    }
    return index;
};
//# sourceMappingURL=pushDataIndex.js.map