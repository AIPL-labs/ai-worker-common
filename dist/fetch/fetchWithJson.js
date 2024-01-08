import { fetchWithAuth } from "./fetchWithAuth";
export const fetchWithJson = async ({ authToken, url, data, options = {}, }) => {
    const { method = "POST", headers = {} } = options;
    const body = typeof data === "string" ? data : JSON.stringify(data);
    return fetchWithAuth({
        authToken,
        url,
        data: body,
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