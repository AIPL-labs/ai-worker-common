export declare const Perfs: {
    start: ({ location, scope, options, onEnd, onClose, onSpan, }: {
        options?: Partial<{
            once: boolean;
            mark: boolean;
            disabled: boolean;
        }> | undefined;
        location: string;
        scope?: string | undefined;
        onEnd?: ((data: {
            message?: string | undefined;
            location: string;
            scope?: string | undefined;
            start: number;
            end: number;
            delta: number;
            cumulative: number;
            timestamp: number;
            parent?: string | undefined;
            mark?: boolean | undefined;
            count?: number | undefined;
        }) => void) | undefined;
        onSpan?: ((data: {
            message?: string | undefined;
            location: string;
            scope?: string | undefined;
            start: number;
            end: number;
            delta: number;
            cumulative: number;
            timestamp: number;
            parent?: string | undefined;
            mark?: boolean | undefined;
            count?: number | undefined;
        }) => void) | undefined;
        onClose?: (() => void) | undefined;
    }) => import("./startPerf").Perf;
};
//# sourceMappingURL=Perfs.d.ts.map