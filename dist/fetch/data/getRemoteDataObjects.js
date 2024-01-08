import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../fetchWithJson";
import { getFetchState } from "../FetchState";
export const getRemoteDataObjects = async (ids) => {
    assertValue(ids);
    const { homeBaseUrl } = getFetchState();
    return fetchWithJson(homeBaseUrl + `/data`, ids);
};
//# sourceMappingURL=getRemoteDataObjects.js.map