import { uniqueId } from "../id/uniqueId";
export const createVoice = (draft) => {
  const { id = uniqueId("voice"), dataId, name = "New Voice" } = draft;
  return { id, dataId, name };
};
//# sourceMappingURL=createVoice.js.map
