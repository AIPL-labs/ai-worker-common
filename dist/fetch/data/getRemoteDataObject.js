import { getRemoteData } from "./getRemoteData";
export const getRemoteDataObject = async (id) => {
    const resp = await getRemoteData(id);
    if (!resp.ok) {
        return undefined;
    }
    return resp.json();
};
//# sourceMappingURL=getRemoteDataObject.js.map