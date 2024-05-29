import { uniqueId } from "../id/uniqueId";
import type { AppObject, AppObjectType } from "../type/app/AppObject";

export const createDefaultAppObject = <T extends AppObjectType>(
  objectType: T,
  draft: Partial<AppObject<T>> = {}
): AppObject<T> => {
  const { id = uniqueId(objectType), ...rest } = draft;

  return { id, ...rest } as AppObject<T>;
};
