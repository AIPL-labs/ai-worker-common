import { fetchWithAuth } from "./fetchWithAuth";
import { getFetchState } from "./FetchState";
export const fetchViaProxy = async (url) => {
    const { homeBaseUrl } = getFetchState();
    return fetchWithAuth(`${homeBaseUrl}/proxy`, undefined, {
        headers: {
            "X-SERVICE": "proxy",
            "X-PROXY": url,
        },
    });
};
//# sourceMappingURL=fetchViaProxy.js.map