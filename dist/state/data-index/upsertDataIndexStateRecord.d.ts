import { AppObject } from "../../type/app/AppObject";
export declare const upsertDataIndexStateRecord: <R extends AppObject>({ idxId, recordId, upserter, createIfNotFound, }: {
    idxId: string;
    recordId: string;
    upserter: (state: R | undefined) => void;
    createIfNotFound?: boolean | undefined;
}) => void;
//# sourceMappingURL=upsertDataIndexStateRecord.d.ts.map