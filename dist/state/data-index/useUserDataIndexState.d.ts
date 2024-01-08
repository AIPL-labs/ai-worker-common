import { AppObject } from "../../type/app/AppObject";
export declare const useUserDataIndexState: <T extends keyof import("../../type/app/AppObject").AppObjectTypeMap>({ objectType, options, userId, }: {
    userId: string;
    objectType: T;
    options?: Partial<{
        createIfNotFound: boolean;
    }> | undefined;
}) => import("../..").DataIndex<AppObject<T>> | undefined;
//# sourceMappingURL=useUserDataIndexState.d.ts.map