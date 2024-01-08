export declare const Apps: {
    error: (error: unknown) => void;
    waitFor: <T extends string | boolean | void | object>(functionOrValue: T | (() => T | Promise<T>), options?: Partial<{
        name: string;
        message: string;
    }>) => Promise<T>;
};
//# sourceMappingURL=Apps.d.ts.map