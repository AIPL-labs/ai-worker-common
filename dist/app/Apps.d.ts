export declare const Apps: {
    error: (error: unknown) => void;
    waitFor: <T extends object | string | void | boolean>(functionOrValue: T | (() => Promise<T> | T), options?: Partial<{
        name: string;
        message: string;
    }>) => Promise<T>;
};
//# sourceMappingURL=Apps.d.ts.map