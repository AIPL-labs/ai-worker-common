export type ChatTextContent = {
  type: "text";
  parts: string[];
};

export type ChatAudioContent = {
  type: "audio";
  b64?: string;
  mediaType: string;
  asrText?: string;
};
