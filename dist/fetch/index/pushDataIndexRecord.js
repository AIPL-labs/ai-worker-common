import { getFetchState } from "../FetchState";
import { fetchWithJson } from "../fetchWithJson";
export const pushDataIndexRecord = async (params) => {
    const { homeBaseUrl } = getFetchState();
    const resp = await fetchWithJson(homeBaseUrl + `/data/index`, params, {
        method: "PUT",
    });
    if (!resp.ok) {
        console.error(resp);
        return undefined;
    }
    return resp.json();
};
//# sourceMappingURL=pushDataIndexRecord.js.map