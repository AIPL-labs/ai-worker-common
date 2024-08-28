export declare const Perfs: {
    start: ({ location, scope, options, onEnd, onClose, onSpan, }: {
        options?: import("./startPerf").PerfOptions;
        location: string;
        scope?: string;
        onEnd?: (data: import("..").AppMessageMap["app:performance"]) => void;
        onSpan?: (data: import("..").AppMessageMap["app:performance"]) => void;
        onClose?: () => void;
    }) => import("./startPerf").Perf;
};
//# sourceMappingURL=Perfs.d.ts.map