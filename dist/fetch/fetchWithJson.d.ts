import type { FetchOptions } from "./FetchOptions";
export declare const fetchWithJson: <T extends object = object>({ authToken, url, data, options, }: {
    authToken?: string;
    url: string;
    data?: T | string;
    options?: Partial<FetchOptions>;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithJson.d.ts.map