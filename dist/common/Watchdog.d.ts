export declare class Watchdog {
    private timeoutId;
    private timeoutMs;
    private callbacks;
    constructor(timeoutMs: number);
    start(): void;
    addListener(cb: () => void): void;
    reset(): void;
    stop(): void;
}
//# sourceMappingURL=Watchdog.d.ts.map