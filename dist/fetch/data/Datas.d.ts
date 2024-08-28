export declare const Datas: {
    getRemoteData: ({ id, homeBaseUrl, authToken, }: Partial<import("./HomeAuth").HomeAuth> & {
        id: string;
    }) => Promise<Response>;
    putRemoteDataAccess: ({ authToken, homeBaseUrl, accessInfo, id, }: Partial<import("./HomeAuth").HomeAuth> & {
        id: string;
        accessInfo: import("../..").AccessInfo;
    }) => Promise<Response>;
    getRemoteDataAccess: ({ authToken, homeBaseUrl, id, }: Partial<import("./HomeAuth").HomeAuth> & {
        id: string;
    }) => Promise<Response>;
    deleteRemoteData: ({ id, homeBaseUrl, authToken, }: Partial<import("./HomeAuth").HomeAuth> & {
        id: string;
    }) => Promise<Response>;
    putRemoteData: ({ authToken, homeBaseUrl, data, id, options, }: Partial<import("./HomeAuth").HomeAuth> & {
        id: string;
        data: BodyInit;
        options?: Partial<{
            mediaType: string;
        }> | undefined;
    }) => Promise<Response>;
};
//# sourceMappingURL=Datas.d.ts.map