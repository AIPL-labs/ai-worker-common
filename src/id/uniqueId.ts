import { AppObjectType } from "../type/app/AppObject";

export const uniqueId = (type: AppObjectType) => {
  return `${type}-${Date.now()}-${crypto.randomUUID()}`;
};
