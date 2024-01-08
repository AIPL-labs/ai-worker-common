import { AppObject } from "../../type/app/AppObject";
export declare const updateUserDataIndexStateRecord: <T extends keyof import("../../type/app/AppObject").AppObjectTypeMap>({ objectType, recordId, updater, userId, }: {
    userId: string;
    objectType: T;
    recordId: string;
    updater: (state: AppObject<T>) => void;
}) => void;
//# sourceMappingURL=updateUserDataIndexStateRecord.d.ts.map