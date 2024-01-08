import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../fetchWithAuth";
export const putRemoteData = async ({ authToken, homeBaseUrl = "", data, id, options = {}, }) => {
    assertValue(id);
    const { mediaType } = options;
    const headers = mediaType
        ? {
            "Content-Type": mediaType,
        }
        : {};
    return await fetchWithAuth({
        authToken,
        url: homeBaseUrl + `/data/${id}`,
        data,
        options: {
            method: "PUT",
            headers,
        },
    });
};
//# sourceMappingURL=putRemoteData.js.map