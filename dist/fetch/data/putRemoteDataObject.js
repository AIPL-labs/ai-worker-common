import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../fetchWithJson";
import { getFetchState } from "../FetchState";
export const putRemoteDataObject = async (data) => {
    const { id } = data;
    assertValue(id);
    const { homeBaseUrl } = getFetchState();
    return await fetchWithJson(homeBaseUrl + `/data/${id}`, data, {
        method: "PUT",
    });
};
//# sourceMappingURL=putRemoteDataObject.js.map