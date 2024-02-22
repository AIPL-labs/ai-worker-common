import { toAsrWhisperSegment } from "./toAsrWhisperSegment";
export const toStandardAsrResult = (value) => {
    const { segments = [], ...rest } = value;
    return {
        ...rest,
        segments: segments.map((s) => toAsrWhisperSegment(s)),
    };
};
//# sourceMappingURL=toStandardAsrResult.js.map