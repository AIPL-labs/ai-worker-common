import { uniqueId } from "../id/uniqueId";
import type { AppVoice } from "../type/voice/AppVoice";

export const createAppVoice = (draft: Partial<AppVoice>): AppVoice => {
  const { id = uniqueId("voice"), name, apiShape = "CustomTts" } = draft;

  return { id, name, apiShape };
};
