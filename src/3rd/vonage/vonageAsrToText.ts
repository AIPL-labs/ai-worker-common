import { isUndefined } from "@mjtdev/engine";
import type { VonageAsr } from "./VongageTypes";

export const vonageAsrToText = (asr: VonageAsr | undefined) => {
  if (isUndefined(asr)) {
    return undefined;
  }
  const { speech } = asr;
  if (!speech.results) {
    return undefined;
  }
  if (speech.results.length === 0) {
    return undefined;
  }
  const best = asr.speech.results.sort((a, b) => {
    return a.confidence > b.confidence ? 1 : -1;
  })[0];
  return best?.text;
};
