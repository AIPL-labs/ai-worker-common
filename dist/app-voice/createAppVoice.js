import { uniqueId } from "../id/uniqueId";
export const createAppVoice = (draft) => {
    const { id = uniqueId("voice"), corpusDocumentIdxId = uniqueId("data-index"), name = "New Voice", apiShape = "CustomTts", browserVoiceConfig = {}, } = draft;
    return { id, corpusDocumentIdxId, name, apiShape, browserVoiceConfig };
};
//# sourceMappingURL=createAppVoice.js.map