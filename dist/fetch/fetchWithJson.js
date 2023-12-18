import { fetchWithAuth } from "./fetchWithAuth";
export const fetchWithJson = async (url, data, options = {}) => {
    const { method = "POST", headers = {} } = options;
    const body = typeof data === "string" ? data : JSON.stringify(data);
    return fetchWithAuth(url, body, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        method,
    });
};
//# sourceMappingURL=fetchWithJson.js.map