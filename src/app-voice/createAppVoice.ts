import { uniqueId } from "../id/uniqueId";
import { AppVoice } from "../type/voice/AppVoice";

export const createAppVoice = (draft: Partial<AppVoice>): AppVoice => {
  const {
    id = uniqueId("voice"),
    name = "New Voice",
    apiShape = "CustomTts",
    browserVoiceConfig = {},
  } = draft;

  return { id, name, apiShape, browserVoiceConfig };
};
