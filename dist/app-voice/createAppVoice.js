import { uniqueId } from "../id/uniqueId";
export const createAppVoice = (draft) => {
    const { id = uniqueId("voice"), name = "New Voice", apiShape = "CustomTts", browserVoiceConfig = {}, } = draft;
    return { id, name, apiShape, browserVoiceConfig };
};
//# sourceMappingURL=createAppVoice.js.map