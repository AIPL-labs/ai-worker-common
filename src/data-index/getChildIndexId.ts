import type { AppObjectType } from "../type/app/AppObject";

export const getChildIndexId = (
  parentId: string,
  objectType: AppObjectType
) => {
  return `${objectType}-${parentId}`;
};
