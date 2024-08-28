import { isDefined } from "@mjtdev/engine";
import { authTokenToAuthHeader } from "../common/authTokenToAuthHeader";
import { orError } from "../common/orError";
export const fetchWithAuth = async (props) => {
    const { url, data, options = {}, authToken, retryOptions = {} } = props;
    const { headers = {}, signal } = options;
    const { maxRetries = 0, retryCondition = () => false } = retryOptions;
    const authHeaders = authToken ? authTokenToAuthHeader(authToken) : {};
    if (options.signal?.aborted) {
        return new Response(`Fetch already aborted, refusing to fetch: ${url}`, {
            status: 499,
        });
    }
    const { method = "GET" } = options;
    const body = method === "GET" ? undefined : data;
    const resp = await orError(() => fetch(url, {
        signal,
        ...options,
        headers: {
            ...authHeaders,
            ...headers,
        },
        body,
    }));
    if (maxRetries > 0 && (await retryCondition(resp))) {
        console.log(`retrying: ${url}`);
        return fetchWithAuth({
            ...props,
            retryOptions: { ...retryOptions, maxRetries: maxRetries - 1 },
        });
    }
    if (resp instanceof Error) {
        throw new Error([`fetch failed for: ${url}`, resp.message].filter(isDefined).join("\n"), {
            cause: resp,
        });
    }
    return resp;
};
//# sourceMappingURL=fetchWithAuth.js.map