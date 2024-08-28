import type { FetchOptions } from "./FetchOptions";
import type { FetchRetryOptions } from "./FetchRetryOptions";
export declare const fetchWithAuth: <T extends BodyInit = BodyInit>(props: {
    authToken?: string;
    url: string;
    data?: T | string;
    options?: FetchOptions;
    retryOptions?: FetchRetryOptions;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithAuth.d.ts.map