import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../../fetch/fetchWithJson";
import { getFetchState } from "../FetchState";
export const putBackendDataObject = async (data) => {
    const { id } = data;
    assertValue(id);
    const { homeBaseUrl } = getFetchState();
    return await fetchWithJson(homeBaseUrl + `/data/${id}`, data, {
        method: "PUT",
    });
};
//# sourceMappingURL=putBackendDataObject.js.map