import type { HomeAuth } from "./HomeAuth";
export declare const putRemoteData: ({ authToken, homeBaseUrl, data, id, options, }: Partial<HomeAuth> & {
    id: string;
    data: BodyInit;
    options?: Partial<{
        mediaType: string;
    }>;
}) => Promise<Response>;
//# sourceMappingURL=putRemoteData.d.ts.map