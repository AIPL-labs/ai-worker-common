import { fetchWithJson } from "../../fetch/fetchWithJson";
import { getFetchState } from "../FetchState";
export const putBackendDataObjects = async (dataObjects) => {
    const { homeBaseUrl } = getFetchState();
    return fetchWithJson(homeBaseUrl + `/data`, dataObjects, {
        method: "PUT",
    });
};
//# sourceMappingURL=putBackendDataObjects.js.map