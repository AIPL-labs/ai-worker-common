export type RecognitionConfig = {
  // Add fields from the RecognitionConfig JSON representation
};

export type RecognitionAudio = {
  // Add fields from the RecognitionAudio JSON representation
};

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

export const isSpeechRecognitionResult = (
  maybe: unknown
): maybe is SpeechRecognitionResult => {
  const straw = maybe as SpeechRecognitionResult;
  return typeof straw === "object" && Array.isArray(straw.alternatives);
};

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

export const isRecognizeResponse = (
  maybe: unknown
): maybe is RecognizeResponse => {
  const straw = maybe as RecognizeResponse;
  return typeof straw === "object" && Array.isArray(straw.results);
};
export type RecognizeResponse = {
  results: SpeechRecognitionResult[];
  totalBilledTime: string;
  speechAdaptationInfo: SpeechAdaptationInfo;
  requestId: string;
};
