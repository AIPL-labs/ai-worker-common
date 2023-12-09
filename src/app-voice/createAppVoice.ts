import { uniqueId } from "../id/uniqueId";
import { AppVoice } from "../type/voice/AppVoice";

export const createAppVoice = (draft: Partial<AppVoice>): AppVoice => {
  const {
    id = uniqueId("voice"),
    corpusDocumentIdxId = uniqueId("data-index"),
    name = "New Voice",
    apiShape = "CustomTts",
    browserVoiceConfig = {},
  } = draft;

  return { id, corpusDocumentIdxId, name, apiShape, browserVoiceConfig };
};
