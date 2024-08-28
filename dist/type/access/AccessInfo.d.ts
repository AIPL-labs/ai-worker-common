export interface AccessInfo {
    owner: string;
    group: string;
    permissions: number;
    acl: {
        userName: string;
        permissions: string;
    }[];
}
export declare enum PermissionLevel {
    NONE = 0,
    READ = 4,
    WRITE = 2,
    EXECUTE = 1
}
//# sourceMappingURL=AccessInfo.d.ts.map