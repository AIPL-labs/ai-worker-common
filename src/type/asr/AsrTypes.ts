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

export const isAsrResult = (maybe: unknown): maybe is AsrResult => {
  const straw = maybe as AsrResult;
  return typeof straw === "object" && Array.isArray(straw.segments);
};
export type AsrResult<T extends AsrSegment = AsrSegment> = {
  text: string;
  segments: T[];
  language: string;
};
