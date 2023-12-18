import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../../fetch/fetchWithAuth";
import { getFetchState } from "../FetchState";
export const putBackendData = async (id, data, options = {}) => {
    assertValue(id);
    const { homeBaseUrl } = getFetchState();
    const { mediaType } = options;
    const headers = mediaType
        ? {
            "Content-Type": mediaType,
        }
        : {};
    return await fetchWithAuth(homeBaseUrl + `/data/${id}`, data, {
        method: "PUT",
        headers,
    });
};
//# sourceMappingURL=putBackendData.js.map