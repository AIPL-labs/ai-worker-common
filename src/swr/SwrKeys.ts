import stableStringify from "json-stable-stringify";
import type { AppObjectType } from "../type/app/AppObject";

export type SwrQueryObject = Partial<{
  ids: string[];
  key: string;
  nonce: string;
  parentId: string;
  objectType: AppObjectType;
}>;

export const keyToQueryObject = (swrKey: string): SwrQueryObject => {
  return JSON.parse(swrKey) as SwrQueryObject;
};

export const swrQueryObjectToKey = (sqo: SwrQueryObject): string => {
  return stableStringify(sqo);
};

export const SwrKeys = {
  keyToQueryObject,
  swrQueryObjectToKey,
};
