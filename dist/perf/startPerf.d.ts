import type { AppMessageMap } from "../type/app-message/AppMessageMap";
export type Perf = {
    startSpan: (span: string, options?: PerfOptions) => Perf;
    closeSpan: (message?: string, nextSpan?: string) => Perf;
    close: () => void;
    addCount: (amount?: number) => Perf;
    end: (message?: string) => Perf;
};
export type PerfOptions = Partial<{
    once: boolean;
    mark: boolean;
    disabled: boolean;
}>;
export declare const startPerf: ({ location, scope, options, onEnd, onClose, onSpan, }: {
    options?: PerfOptions;
    location: string;
    scope?: string;
    onEnd?: (data: AppMessageMap["app:performance"]) => void;
    onSpan?: (data: AppMessageMap["app:performance"]) => void;
    onClose?: () => void;
}) => Perf;
//# sourceMappingURL=startPerf.d.ts.map