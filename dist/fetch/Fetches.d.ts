export declare const Fetches: {
    fetchWithJson: <T extends object = object>({ authToken, url, data, options, retryOptions, }: {
        authToken?: string | undefined;
        url: string;
        data?: string | T | undefined;
        options?: Partial<Partial<RequestInit>> | undefined;
        retryOptions?: Partial<{
            maxRetries: number;
            retryCondition: (value: Error | Response) => boolean | Promise<boolean>;
        }> | undefined;
    }) => Promise<Response>;
    fetchWithAuth: <T_1 extends BodyInit = BodyInit>(props: {
        authToken?: string | undefined;
        url: string;
        data?: string | T_1 | undefined;
        options?: Partial<RequestInit> | undefined;
        retryOptions?: Partial<{
            maxRetries: number;
            retryCondition: (value: Error | Response) => boolean | Promise<boolean>;
        }> | undefined;
    }) => Promise<Response>;
    fetchViaProxy: ({ url, homeBaseUrl, authToken, retryOptions, }: import("./data/HomeAuth").HomeAuth & {
        url: string;
        retryOptions?: Partial<{
            maxRetries: number;
            retryCondition: (value: Error | Response) => boolean | Promise<boolean>;
        }> | undefined;
    }) => Promise<Response>;
};
//# sourceMappingURL=Fetches.d.ts.map