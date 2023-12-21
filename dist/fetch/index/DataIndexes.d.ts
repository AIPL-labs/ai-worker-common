export declare const DataIndexes: {
    pullDataIndex: <T extends import("../..").DataObject = import("../..").DataObject>(id: string) => Promise<import("../..").DataIndex<T> | undefined>;
    pushDataIndex: <T_1 extends import("../..").DataObject>(index: import("../..").DataIndex<T_1>) => Promise<import("../..").DataIndex<T_1> | undefined>;
    getUserDataIndexId: (objectType: keyof import("../..").AppObjectTypeMap, userId: string) => string;
    pullUserDataIndex: <T_2 extends import("../..").DataObject>(objectType: keyof import("../..").AppObjectTypeMap, userId: string, options?: Partial<{
        createIfNotFound: boolean;
    }>) => Promise<import("../..").DataIndex<T_2> | undefined>;
    pushDataIndexRecord: <T_3 extends import("../..").DataObject>(params: import("../..").DataIndexRecordPushRequest<T_3>) => Promise<import("../..").DataIndex<T_3> | undefined>;
    deleteDataIndexRecord: <T_4 extends import("../..").DataObject>(params: import("../..").DataIndexRecordDeleteRequest) => Promise<import("../..").DataIndex<T_4> | undefined>;
};
//# sourceMappingURL=DataIndexes.d.ts.map