import { AppObjectType } from "../type/app/AppObject";

export const uniqueId = (
  type: AppObjectType | "data",
  nonce: string = `${Date.now()}-${crypto.randomUUID()}`
) => {
  return `${type}-${nonce}`;
};


