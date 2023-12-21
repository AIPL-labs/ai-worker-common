import { getFetchState } from "../FetchState";
import { fetchWithJson } from "../fetchWithJson";
export const deleteDataIndexRecord = async (params) => {
    const { homeBaseUrl } = getFetchState();
    const resp = await fetchWithJson(homeBaseUrl + `/data/index`, params, {
        method: "DELETE",
    });
    if (!resp.ok) {
        console.error(resp);
        return undefined;
    }
    return resp.json();
};
//# sourceMappingURL=deleteDataIndexRecord.js.map