import { getFetchState } from "../FetchState";
import { fetchWithJson } from "../fetchWithJson";
export const createRemoteDataObject = async (type, draft) => {
    const { homeBaseUrl } = getFetchState();
    return await fetchWithJson(homeBaseUrl + `/data/create/${type}`, draft);
};
//# sourceMappingURL=createRemoteDataObject.js.map