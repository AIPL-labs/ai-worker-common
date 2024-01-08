import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../../fetch/fetchWithAuth";
import { getFetchState } from "../FetchState";
export const getRemoteData = async (id) => {
    assertValue(id);
    const { homeBaseUrl } = getFetchState();
    return fetchWithAuth(homeBaseUrl + `/data/${id}`);
};
//# sourceMappingURL=getBackendData.js.map