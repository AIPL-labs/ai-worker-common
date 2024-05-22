import { isDefined } from "@mjtdev/engine";
import type { AppMessageMap } from "../type/app-message/AppMessageMap";

export type Perf = {
  startSpan: (span: string, options?: PerfOptions) => Perf;
  closeSpan: (message?: string, nextSpan?: string) => Perf;
  close: () => void;
  end: (message?: string) => Perf;
};
export type PerfOptions = Partial<{
  once: boolean;
  mark: boolean;
  disabled: boolean;
}>;

export const startPerf = ({
  location,
  scope,
  options = {},
  onEnd = () => {},
  onClose = () => {},
  onSpan = () => {},
}: {
  options?: PerfOptions;
  location: string;
  scope?: string;
  onEnd?: (data: AppMessageMap["app:performance"]) => void;
  onSpan?: (data: AppMessageMap["app:performance"]) => void;
  onClose?: () => void;
}): Perf => {
  const start = Date.now();
  let fired = false;
  const { once, mark } = options;
  const deltas: number[] = [];

  const perf: Perf = {
    startSpan: (span: string, options: PerfOptions = {}) => {
      return startPerf({
        location: span,
        scope,
        onClose,
        onEnd,
        onSpan,
        options,
      });
    },
    closeSpan: (message?: string, nextSpan?: string) => {
      perf.end(message);
      perf.close();
      if (isDefined(nextSpan)) {
        return perf.startSpan(nextSpan);
      }
      return perf;
    },
    close: onClose,
    end: (message?: string) => {
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
        timestamp: start,
      });
      return perf;
    },
  };
  return perf;
};
