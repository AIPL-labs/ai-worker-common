import type { FetchOptions } from "./FetchOptions";
export declare const fetchWithAuth: <T extends BodyInit = BodyInit>({ url, data, options, authToken, }: {
    authToken?: string;
    url: string;
    data?: T | string;
    options?: FetchOptions;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithAuth.d.ts.map