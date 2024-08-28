import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../fetchWithJson";
export const putRemoteDataAccess = async ({ authToken, homeBaseUrl = "", accessInfo, id, }) => {
    assertValue(id);
    return await fetchWithJson({
        authToken,
        url: homeBaseUrl + `/data/access/${id}`,
        data: accessInfo,
        options: {
            method: "PUT",
        },
    });
};
//# sourceMappingURL=putRemoteDataAccess.js.map