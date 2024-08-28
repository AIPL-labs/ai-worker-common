import { first, isUndefined } from "@mjtdev/engine";
import { isRecognizeResponse, } from "../../3rd/gcp/GcpAsrTypes";
import { isAsrResult } from "./AsrTypes";
import { toAsrWhisperSegment } from "./toAsrWhisperSegment";
export const toStandardAsrResult = (value) => {
    if (isAsrResult(value)) {
        const { segments = [], ...rest } = value;
        return {
            ...rest,
            segments: segments.map((s) => toAsrWhisperSegment(s)),
        };
    }
    if (isRecognizeResponse(value)) {
        // const { alternatives, channelTag, languageCode, resultEndTime } = value;
        const { results } = value;
        const result = first(results);
        if (isUndefined(result)) {
            throw new Error("No results found", { cause: value });
        }
        const { alternatives, languageCode, channelTag, resultEndTime } = result;
        return {
            language: languageCode,
            text: alternatives[0].transcript,
            segments: [],
        };
    }
    throw new Error("Unrecognized AsrResult format", { cause: value });
};
//# sourceMappingURL=toStandardAsrResult.js.map