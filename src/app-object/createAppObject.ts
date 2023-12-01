import {
  AppObjectType,
  AppObject,
  AppObjectTypeMapping,
} from "../type/app/AppObject";
import { APP_OBJECT_CREATORS } from "./APP_OBJECT_CREATORS";

export type AppObjectCreator<K extends AppObjectType> = (
  draft: Partial<AppObject<K>>
) => AppObjectTypeMapping[K];

export const createAppObject = <T extends AppObjectType = AppObjectType>(
  type: T,
  draft: Partial<AppObject<T>> = {}
): AppObject<T> | undefined => {
  const creator = APP_OBJECT_CREATORS[type];
  if (!creator) {
    return undefined;
  }
  return creator(draft);
};
