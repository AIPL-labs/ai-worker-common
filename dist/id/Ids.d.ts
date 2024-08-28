export declare const Ids: {
    parseId: (id: string) => {
        type: string;
        timestamp: string;
        uuid: string;
    } | undefined;
    uniqueId: (type: import("..").AppObjectType | "data" | "true-name", nonce?: string) => string;
};
//# sourceMappingURL=Ids.d.ts.map