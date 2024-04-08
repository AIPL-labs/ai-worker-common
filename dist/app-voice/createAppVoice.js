import { uniqueId } from "../id/uniqueId";
export const createAppVoice = (draft) => {
    const { id = uniqueId("voice"), name, apiShape = "CustomTts" } = draft;
    return { id, name, apiShape };
};
//# sourceMappingURL=createAppVoice.js.map