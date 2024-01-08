import { authTokenToAuthHeader } from "../common/authTokenToAuthHeader";
import { orError } from "../common/orError";
export const fetchWithAuth = async ({ url, data, options = {}, authToken, }) => {
    const { headers = {}, signal } = options;
    const authHeaders = authToken ? authTokenToAuthHeader(authToken) : {};
    const resp = await orError(() => fetch(url, {
        signal,
        ...options,
        headers: {
            ...authHeaders,
            ...headers,
        },
        body: data,
    }));
    if (options.signal?.aborted) {
        return new Response("Fetch aborted", { status: 499 });
    }
    if (resp instanceof Error) {
        return new Response(`fetch failed for: ${url}`, {
            status: 555,
        });
    }
    return resp;
};
//# sourceMappingURL=fetchWithAuth.js.map