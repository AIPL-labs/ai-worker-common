import { FetchOptions } from "./FetchOptions";
export declare const fetchWithAuth: <T extends BodyInit = BodyInit>({ url, data, options, authToken, }: {
    authToken?: string | undefined;
    url: string;
    data?: string | T | undefined;
    options?: Partial<RequestInit> | undefined;
}) => Promise<Response>;
//# sourceMappingURL=fetchWithAuth.d.ts.map