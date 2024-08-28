import type { FetchRetryOptions } from "./FetchRetryOptions";
import type { HomeAuth } from "./data/HomeAuth";
export declare const fetchViaProxy: ({ url, homeBaseUrl, authToken, retryOptions, }: HomeAuth & {
    url: string;
    retryOptions?: FetchRetryOptions;
}) => Promise<Response>;
//# sourceMappingURL=fetchViaProxy.d.ts.map