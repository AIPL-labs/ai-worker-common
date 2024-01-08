import { FetchOptions } from "./FetchOptions";
export declare const fetchWithJson: <T extends object = object>({ authToken, url, data, options, }: {
    authToken?: string | undefined;
    url: string;
    data?: string | T | undefined;
    options?: Partial<Partial<RequestInit>> | undefined;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithJson.d.ts.map