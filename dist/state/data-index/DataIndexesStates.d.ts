export declare const DataIndexesStates: {
    pullDataIndexState: (id: string) => Promise<void>;
    pushDataIndexState: (id: string) => void;
    useDataIndexState: <T extends import("../..").AppObject>(id: string, options?: Partial<{
        createIfNotFound: boolean;
    }>) => import("../..").DataIndex<T> | undefined;
    deleteDataIndexState: <T_1 extends import("../..").DataObject>(idx: import("../..").DataIndex<T_1>) => void;
    getDataIndexState: <T_2 extends import("../..").AppObject>(id: string, options?: Partial<{
        createIfNotFound: boolean;
    }>) => import("../..").DataIndex<T_2> | undefined;
    setDataIndexState: <T_3 extends import("../..").DataObject>(idx: import("../..").DataIndex<T_3>) => void;
    updateDataIndexState: <T_4 extends import("../..").DataObject>(id: string, updater: (state: import("../..").DataIndex<T_4>) => void) => void;
    useDataIndexStateRecord: <R extends import("../..").AppObject>(idxId: string, recordId: string) => R | undefined;
    getDataIndexStateRecord: <R_1 extends import("../..").AppObject>(idxId: string, recordId: string) => R_1 | undefined;
    setDataIndexStateRecord: <T_5 extends keyof import("../..").AppObjectTypeMap>(idxId: string, record: import("../..").AppObject<T_5>) => void;
    updateDataIndexStateRecord: <R_2 extends import("../..").AppObject>(idxId: string, recordId: string, updater: (state: R_2) => void) => void;
    upsertDataIndexStateRecord: <R_3 extends import("../..").AppObject>({ idxId, recordId, upserter, createIfNotFound, }: {
        idxId: string;
        recordId: string;
        upserter: (state: R_3 | undefined) => void;
        createIfNotFound?: boolean | undefined;
    }) => void;
    deleteDataIndexStateRecord: <R_4 extends import("../..").AppObject>(idxId: string, recordId: string) => void;
    useUserDataIndexState: <T_6 extends keyof import("../..").AppObjectTypeMap>({ objectType, options, userId, }: {
        userId: string;
        objectType: T_6;
        options?: Partial<{
            createIfNotFound: boolean;
        }> | undefined;
    }) => import("../..").DataIndex<import("../..").AppObject<T_6>> | undefined;
    getUserDataIndexState: <T_7 extends keyof import("../..").AppObjectTypeMap>({ userId, objectType, }: {
        userId: string;
        objectType: T_7;
    }) => import("../..").DataIndex<import("../..").AppObject<T_7>> | undefined;
    useUserDataIndexStateRecord: <T_8 extends keyof import("../..").AppObjectTypeMap>({ userId, objectType, recordId, }: {
        userId: string;
        objectType: T_8;
        recordId: string;
    }) => import("../..").AppObject<T_8> | undefined;
    updateUserDataIndexStateRecord: <T_9 extends keyof import("../..").AppObjectTypeMap>({ objectType, recordId, updater, userId, }: {
        userId: string;
        objectType: T_9;
        recordId: string;
        updater: (state: import("../..").AppObject<T_9>) => void;
    }) => void;
    setUserDataIndexStateRecord: <T_10 extends keyof import("../..").AppObjectTypeMap>({ userId, objectType, record, }: {
        userId: string;
        objectType: T_10;
        record: import("../..").AppObject<T_10>;
    }) => void;
    getUserDataIndexStateRecord: <T_11 extends keyof import("../..").AppObjectTypeMap>({ userId, objectType, recordId, }: {
        userId: string;
        objectType: T_11;
        recordId: string;
    }) => import("../..").AppObject<T_11> | undefined;
    deleteUserDataIndexStateRecord: <T_12 extends keyof import("../..").AppObjectTypeMap>({ objectType, recordId, userId, }: {
        userId: string;
        objectType: T_12;
        recordId: string;
    }) => void;
};
//# sourceMappingURL=DataIndexesStates.d.ts.map