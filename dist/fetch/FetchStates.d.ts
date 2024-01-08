export declare const FetchStates: {
    fetchWithJson: <T extends object = object>(url: string, data?: string | T | undefined, options?: Partial<RequestInit> & Partial<{
        authToken: string;
    }>) => Promise<Response>;
    fetchWithAuth: <T_1 extends BodyInit = BodyInit>(url: string, data?: string | T_1 | undefined, options?: Partial<RequestInit> & Partial<{
        authToken: string;
    }>) => Promise<Response>;
    fetchViaProxy: (url: string) => Promise<Response>;
    useFetchState: import("@mjtdev/engine").State<{
        homeBaseUrl: string | undefined;
        authToken: string | undefined;
    }>;
    getFetchState: import("@mjtdev/engine").StateGetter<{
        homeBaseUrl: string | undefined;
        authToken: string | undefined;
    }>;
    updateFetchState: import("@mjtdev/engine").StateUpdater<{
        homeBaseUrl: string | undefined;
        authToken: string | undefined;
    }>;
};
//# sourceMappingURL=FetchStates.d.ts.map