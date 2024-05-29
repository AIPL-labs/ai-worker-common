import { isUndefined } from "@mjtdev/engine";
import type {
  AppObject,
  AppObjectType,
  AppObjectTypeMap,
} from "../type/app/AppObject";
import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";
import { createDefaultAppObject } from "./createDefaultAppObject";

export type AppObjectCreator<K extends AppObjectType> = (
  draft: Partial<AppObject<K>>
) => AppObjectTypeMap[K];

export const createAppObject = <T extends AppObjectType = AppObjectType>(
  type: T,
  draft: Partial<AppObject<T>> = {}
): AppObject<T> => {
  const creator = APP_OBJECT_CREATORS[type];
  if (isUndefined(creator)) {
    return createDefaultAppObject(type, draft);
  }
  return creator(draft);
};
