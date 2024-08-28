import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../fetchWithJson";
export const getRemoteDataAccess = async ({ authToken, homeBaseUrl = "", id, }) => {
    assertValue(id);
    return await fetchWithJson({
        authToken,
        url: homeBaseUrl + `/data/access/${id}`,
        options: {
            method: "GET",
        },
    });
};
//# sourceMappingURL=getRemoteDataAccess.js.map