export const toAsrWhisperSegment = (value) => {
    if (Array.isArray(value)) {
        return {
            id: value[0],
            seek: value[1],
            start: value[2],
            end: value[3],
            text: value[4],
            tokens: value[5],
            temperature: value[6],
            avg_logprob: value[7],
            compression_ratio: value[8],
            no_speech_prob: value[9],
        };
    }
    return value;
};
//# sourceMappingURL=toAsrWhisperSegment.js.map