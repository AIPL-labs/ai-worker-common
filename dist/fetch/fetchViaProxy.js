import { fetchWithAuth } from "./fetchWithAuth";
export const fetchViaProxy = async ({ url, homeBaseUrl, authToken, retryOptions, }) => {
    return fetchWithAuth({
        authToken,
        retryOptions,
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