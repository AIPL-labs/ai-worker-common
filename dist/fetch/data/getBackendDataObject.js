import { getRemoteData } from "./getBackendData";
export const getBackendDataObject = async (id) => {
    const resp = await getRemoteData(id);
    if (!resp.ok) {
        return undefined;
    }
    return resp.json();
};
//# sourceMappingURL=getBackendDataObject.js.map