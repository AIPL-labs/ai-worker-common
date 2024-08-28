import { fetchWithAuth } from "./fetchWithAuth";
export const fetchWithJson = async ({ authToken, url, data, options = {}, retryOptions, }) => {
    const { method = "POST", headers = {} } = options;
    const body = typeof data === "string" ? data : JSON.stringify(data);
    return fetchWithAuth({
        authToken,
        url,
        data: body,
        retryOptions,
        options: {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            method,
        },
    });
};
//# sourceMappingURL=fetchWithJson.js.map