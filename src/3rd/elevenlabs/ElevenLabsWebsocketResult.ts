/**
  {
    "audio": "Y3VyaW91cyBtaW5kcyB0aGluayBhbGlrZSA6KQ==",
    "isFinal": false,
    "normalizedAlignment": {
        "char_start_times_ms": [0, 3, 7, 9, 11, 12, 13, 15, 17, 19, 21],
        "chars_durations_ms": [3, 4, 2, 2, 1, 1, 2, 2, 2, 2, 3]
        "chars": ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
    },
    "alignment": {
        "char_start_times_ms": [0, 3, 7, 9, 11, 12, 13, 15, 17, 19, 21],
        "chars_durations_ms": [3, 4, 2, 2, 1, 1, 2, 2, 2, 2, 3]
        "chars": ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
    }
}
 */
export type ElevenLabsWebsocketResult = {
  audio: string;
  isFinal: boolean;
  normalizedAlignment: ElevenLabsAlignment;
  alignment: ElevenLabsAlignment;

  code?: number;
  error?: string;
  message?: string;
};
export type ElevenLabsAlignment = {
  char_start_times_ms: number[];
  chars_durations_ms: number[];
  chars: string[];
};

export type ElevenLabsWebsocketRequest = Partial<{
  text: string;
  voice_settings: Partial<{
    stability: number;
    similarity_boost: number;
    style: number;
    use_speaker_boost: boolean;
  }>;
  generation_config: Partial<{
    chunk_length_schedule: number[];
  }>;
  xi_api_key: string;
  authorization: string;

  try_trigger_generation: boolean;
  flush: boolean;
}>;
