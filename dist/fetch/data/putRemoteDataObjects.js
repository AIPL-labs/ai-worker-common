import { fetchWithJson } from "../fetchWithJson";
import { getFetchState } from "../FetchState";
export const putRemoteDataObjects = async (dataObjects) => {
    const { homeBaseUrl } = getFetchState();
    return fetchWithJson(homeBaseUrl + `/data`, dataObjects, {
        method: "PUT",
    });
};
//# sourceMappingURL=putRemoteDataObjects.js.map