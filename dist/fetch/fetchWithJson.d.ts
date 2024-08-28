import type { FetchOptions } from "./FetchOptions";
import type { FetchRetryOptions } from "./FetchRetryOptions";
export declare const fetchWithJson: <T extends object = object>({ authToken, url, data, options, retryOptions, }: {
    authToken?: string;
    url: string;
    data?: T | string;
    options?: Partial<FetchOptions>;
    retryOptions?: FetchRetryOptions;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithJson.d.ts.map