import { AppObject } from "../../type/app/AppObject";
export declare const useUserDataIndexStateRecord: <T extends keyof import("../../type/app/AppObject").AppObjectTypeMap>({ userId, objectType, recordId, }: {
    userId: string;
    objectType: T;
    recordId: string;
}) => AppObject<T> | undefined;
//# sourceMappingURL=useUserDataIndexStateRecord.d.ts.map