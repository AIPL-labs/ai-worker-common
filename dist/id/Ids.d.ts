export declare const Ids: {
    parseId: (id: string) => {
        type: string;
        timestamp: string;
        uuid: string;
    } | undefined;
    uniqueId: (type: "data" | keyof import("..").AppObjectTypeMap | "true-name", nonce?: string) => string;
};
//# sourceMappingURL=Ids.d.ts.map