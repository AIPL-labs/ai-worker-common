import { isDefined } from "@mjtdev/engine";
export const startPerf = ({ location, scope, options = {}, onEnd = () => { }, onClose = () => { }, onSpan = () => { }, }) => {
    const start = Date.now();
    let fired = false;
    const { once, mark } = options;
    const deltas = [];
    let count = 0;
    const perf = {
        startSpan: (span, options = {}) => {
            return startPerf({
                location: span,
                scope,
                onClose,
                onEnd,
                onSpan,
                options,
            });
        },
        closeSpan: (message, nextSpan) => {
            perf.end(message);
            perf.close();
            if (isDefined(nextSpan)) {
                return perf.startSpan(nextSpan);
            }
            return perf;
        },
        addCount: (amount = 1) => {
            count = count + amount;
            return perf;
        },
        close: onClose,
        end: (message) => {
            if (fired && once) {
                return perf;
            }
            fired = true;
            const end = Date.now();
            const priorCumalitie = deltas.reduce((acc, cur) => acc + cur, 0);
            const delta = end - start - priorCumalitie;
            deltas.push(delta);
            const postCumulative = deltas.reduce((acc, cur) => acc + cur, 0);
            onEnd({
                mark,
                cumulative: postCumulative,
                message,
                location,
                scope,
                start,
                delta,
                end,
                count,
                timestamp: start,
            });
            return perf;
        },
    };
    return perf;
};
//# sourceMappingURL=startPerf.js.map