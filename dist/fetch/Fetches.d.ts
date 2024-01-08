export declare const Fetches: {
    fetchWithJson: <T extends object = object>({ authToken, url, data, options, }: {
        authToken?: string | undefined;
        url: string;
        data?: string | T | undefined;
        options?: Partial<Partial<RequestInit>> | undefined;
    }) => Promise<Response>;
    fetchWithAuth: <T_1 extends BodyInit = BodyInit>({ url, data, options, authToken, }: {
        authToken?: string | undefined;
        url: string;
        data?: string | T_1 | undefined;
        options?: Partial<RequestInit> | undefined;
    }) => Promise<Response>;
    fetchViaProxy: ({ url, homeBaseUrl, authToken, }: import("./data/HomeAuth").HomeAuth & {
        url: string;
    }) => Promise<Response>;
};
//# sourceMappingURL=Fetches.d.ts.map