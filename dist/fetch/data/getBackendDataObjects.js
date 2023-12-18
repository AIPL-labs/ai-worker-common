import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../../fetch/fetchWithJson";
import { getFetchState } from "../FetchState";
export const getBackendDataObjects = async (ids) => {
    assertValue(ids);
    const { homeBaseUrl } = getFetchState();
    return fetchWithJson(homeBaseUrl + `/data`, ids);
};
//# sourceMappingURL=getBackendDataObjects.js.map