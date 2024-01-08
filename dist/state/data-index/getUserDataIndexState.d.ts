import { AppObject } from "../../type/app/AppObject";
export declare const getUserDataIndexState: <T extends keyof import("../../type/app/AppObject").AppObjectTypeMap>({ userId, objectType, }: {
    userId: string;
    objectType: T;
}) => import("../..").DataIndex<AppObject<T>> | undefined;
//# sourceMappingURL=getUserDataIndexState.d.ts.map