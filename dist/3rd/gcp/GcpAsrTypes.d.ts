export type RecognitionConfig = {};
export type RecognitionAudio = {};
export type SpeechRecognitionAlternative = {
    transcript: string;
    confidence: number;
    words: WordInfo[];
};
export type WordInfo = {
    startTime: string;
    endTime: string;
    word: string;
    confidence: number;
    speakerTag: number;
};
export declare const isSpeechRecognitionResult: (maybe: unknown) => maybe is SpeechRecognitionResult;
export type SpeechRecognitionResult = {
    alternatives: SpeechRecognitionAlternative[];
    channelTag: number;
    resultEndTime: string;
    languageCode: string;
};
export type SpeechAdaptationInfo = {
    adaptationTimeout: boolean;
    timeoutMessage: string;
};
export type RecognizeRequest = {
    config: RecognitionConfig;
    audio: RecognitionAudio;
};
export declare const isRecognizeResponse: (maybe: unknown) => maybe is RecognizeResponse;
export type RecognizeResponse = {
    results: SpeechRecognitionResult[];
    totalBilledTime: string;
    speechAdaptationInfo: SpeechAdaptationInfo;
    requestId: string;
};
//# sourceMappingURL=GcpAsrTypes.d.ts.map