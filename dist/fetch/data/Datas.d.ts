export declare const Datas: {
    createBackendDataObject: <T extends keyof import("../..").AppObjectTypeMap>(type: T, draft: Partial<import("../..").AppObject<T>>) => Promise<Response>;
    getBackendData: (id: string) => Promise<Response>;
    deleteBackendData: (id: string) => Promise<Response>;
    putBackendData: (id: string, data: BodyInit, options?: Partial<{
        mediaType: string;
        authToken: string;
    }>) => Promise<Response>;
    getBackendDataObject: <T_1 extends import("../..").DataObject = import("../..").DataObject>(id: string) => Promise<T_1 | undefined>;
    getBackendDataObjects: (ids: string[]) => Promise<Response>;
    putBackendDataObject: (data: import("../..").DataObject) => Promise<Response>;
    putBackendDataObjects: (dataObjects: import("../..").DataObject[]) => Promise<Response>;
};
//# sourceMappingURL=Datas.d.ts.map