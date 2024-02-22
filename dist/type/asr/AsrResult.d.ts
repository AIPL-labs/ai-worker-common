export type AsrFastWhisperSegment = [
    id: number,
    seek: number,
    start: number,
    end: number,
    text: string,
    tokens: number[],
    temperature: number,
    avg_logprob: number,
    compression_ratio: number,
    no_speech_prob: number
];
export type AsrWhisperSegment = {
    id: number;
    seek: number;
    start: number;
    end: number;
    text: string;
    tokens: Array<number>;
    temperature: number;
    avg_logprob: number;
    compression_ratio: number;
    no_speech_prob: number;
};
export type AsrSegment = AsrFastWhisperSegment | AsrWhisperSegment;
export type AsrResult<T extends AsrSegment> = {
    text: string;
    segments: T[];
    language: string;
};
export declare const toAsrWhisperSegment: (value: AsrSegment) => AsrWhisperSegment;
export declare const toStandardAsrResult: <T extends AsrSegment>(value: AsrResult<T>) => AsrResult<AsrWhisperSegment>;
//# sourceMappingURL=AsrResult.d.ts.map