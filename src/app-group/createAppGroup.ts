import { uniqueId } from "../id/uniqueId";
import { AppGroup } from "../type/group/AppGroup";

export const createAppGroup = (draft: Partial<AppGroup>): AppGroup => {
  const { id = uniqueId("app-group"), name } = draft;

  return { id, name };
};
