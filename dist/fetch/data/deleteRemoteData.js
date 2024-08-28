import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../fetchWithAuth";
export const deleteRemoteData = async ({ id, homeBaseUrl = "", authToken, }) => {
    assertValue(id);
    return fetchWithAuth({
        authToken,
        url: homeBaseUrl + `/data/${id}`,
        options: {
            method: "DELETE",
        },
    });
};
//# sourceMappingURL=deleteRemoteData.js.map