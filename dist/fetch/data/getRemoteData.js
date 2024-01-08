import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../fetchWithAuth";
export const getRemoteData = async ({ id, homeBaseUrl = "", authToken, }) => {
    assertValue(id);
    return fetchWithAuth({ url: homeBaseUrl + `/data/${id}`, authToken });
};
//# sourceMappingURL=getRemoteData.js.map