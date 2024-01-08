import { fetchWithAuth } from "./fetchWithAuth";
export const fetchViaProxy = async ({ url, homeBaseUrl, authToken, }) => {
    return fetchWithAuth({
        authToken,
        url: `${homeBaseUrl}/proxy`,
        options: {
            headers: {
                "X-SERVICE": "proxy",
                "X-PROXY": url,
            },
        },
    });
};
//# sourceMappingURL=fetchViaProxy.js.map