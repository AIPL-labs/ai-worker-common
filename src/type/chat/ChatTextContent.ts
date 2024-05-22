export type ChatTextContent = {
  type: "text";
  parts: string[];
};

export type ChatAudioContent = {
  type: "audio";
  b64?: string;
  bytes?: ArrayBuffer;
  mediaType: string;
  asrText?: string;
};
