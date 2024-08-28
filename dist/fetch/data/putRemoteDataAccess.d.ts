import type { AccessInfo } from "../../type/access/AccessInfo";
import type { HomeAuth } from "./HomeAuth";
export declare const putRemoteDataAccess: ({ authToken, homeBaseUrl, accessInfo, id, }: Partial<HomeAuth> & {
    id: string;
    accessInfo: AccessInfo;
}) => Promise<Response>;
//# sourceMappingURL=putRemoteDataAccess.d.ts.map