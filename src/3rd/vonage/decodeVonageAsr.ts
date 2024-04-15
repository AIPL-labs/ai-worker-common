import { isUndefined, safe } from "@mjtdev/engine";
import type { VonageAsr } from "./VongageTypes";

export const decodeVonageAsr = (data: string) => {
  return safe(() => {
    const asr = JSON.parse(data) as VonageAsr;
    if (isUndefined(asr)) {
      return undefined;
    }
    const { speech } = asr;
    if (speech.results.length === 0) {
      return undefined;
    }
    const best = asr.speech.results.sort((a, b) => {
      return a.confidence > b.confidence ? 1 : -1;
    })[0];
    console.log({ best, asr });
    return best?.text;
  });
};
