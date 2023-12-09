import { AppObjectType } from "../type/app/AppObject";

export const uniqueId = (type: AppObjectType | "data") => {
  return `${type}-${Date.now()}-${crypto.randomUUID()}`;
};
