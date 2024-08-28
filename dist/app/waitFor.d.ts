export declare const useWaitState: UseBoundStore<StoreApi<T>>, updateWaitState: import("@mjtdev/engine").StateUpdater<{
    actives: string[];
    logger: (message: string, name: string) => void;
}>, getWaitState: import("@mjtdev/engine").StateGetter<{
    actives: string[];
    logger: (message: string, name: string) => void;
}>;
export declare const waitFor: <T extends string | boolean | void | object>(functionOrValue: T | (() => Promise<T> | T), options?: Partial<{
    name: string;
    message: string;
}>) => Promise<T>;
//# sourceMappingURL=waitFor.d.ts.map