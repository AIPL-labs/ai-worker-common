export declare const Fetches: {
    fetchWithJson: <T extends object = object>({ authToken, url, data, options, retryOptions, }: {
        authToken?: string;
        url: string;
        data?: T | string;
        options?: Partial<import("./FetchOptions").FetchOptions>;
        retryOptions?: import("./FetchRetryOptions").FetchRetryOptions;
    }) => Promise<Response>;
    fetchWithAuth: <T extends BodyInit = BodyInit>(props: {
        authToken?: string;
        url: string;
        data?: T | string;
        options?: import("./FetchOptions").FetchOptions;
        retryOptions?: import("./FetchRetryOptions").FetchRetryOptions;
    }) => Promise<Response>;
    fetchViaProxy: ({ url, homeBaseUrl, authToken, retryOptions, }: import("./data/HomeAuth").HomeAuth & {
        url: string;
        retryOptions?: import("./FetchRetryOptions").FetchRetryOptions;
    }) => Promise<Response>;
};
//# sourceMappingURL=Fetches.d.ts.map