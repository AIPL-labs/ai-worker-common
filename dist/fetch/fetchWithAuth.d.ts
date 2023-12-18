import { FetchOptions } from "./FetchOptions";
export declare const fetchWithAuth: <T extends BodyInit = BodyInit>(url: string, data?: string | T | undefined, options?: FetchOptions & Partial<{
    authToken: string;
}>) => Promise<Response>;
//# sourceMappingURL=fetchWithAuth.d.ts.map