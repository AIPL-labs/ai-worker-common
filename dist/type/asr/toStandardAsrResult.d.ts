import { type RecognizeResponse } from "../../3rd/gcp/GcpAsrTypes";
import { type AsrResult, type AsrSegment } from "./AsrTypes";
export declare const toStandardAsrResult: <T extends AsrSegment>(value: AsrResult<T> | RecognizeResponse) => AsrResult;
//# sourceMappingURL=toStandardAsrResult.d.ts.map