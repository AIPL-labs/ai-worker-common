export declare const Ids: {
    parseId: (id: string) => {
        type: string;
        timestamp: string;
        uuid: string;
    } | undefined;
    uniqueId: (type: keyof import("..").AppObjectTypeMap | "data", nonce?: string) => string;
};
//# sourceMappingURL=Ids.d.ts.map