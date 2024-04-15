import type { AsrSegment, AsrResult, AsrWhisperSegment } from "./AsrTypes";
import { toAsrWhisperSegment } from "./toAsrWhisperSegment";


export const toStandardAsrResult = <T extends AsrSegment>(
  value: AsrResult<T>
): AsrResult<AsrWhisperSegment> => {
  const { segments = [], ...rest } = value;
  return {
    ...rest,
    segments: segments.map((s) => toAsrWhisperSegment(s)),
  };
};
