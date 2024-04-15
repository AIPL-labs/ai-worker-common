import type {
  AppObjectType,
  AppObject,
  AppObjectTypeMap,
} from "../type/app/AppObject";
import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";

export type AppObjectCreator<K extends AppObjectType> = (
  draft: Partial<AppObject<K>>
) => AppObjectTypeMap[K];

export const createAppObject = <T extends AppObjectType = AppObjectType>(
  type: T,
  draft: Partial<AppObject<T>> = {}
): AppObject<T> => {
  const creator = APP_OBJECT_CREATORS[type];
  if (!creator) {
    throw new Error(`no AppObject creator: ${type}`);
  }
  return creator(draft);
};
