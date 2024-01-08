import { AppMessageMap } from "./AppMessageMap";
import { AppMessageType } from "./AppMessageType";

export type AppMessage<T extends keyof AppMessageMap = keyof AppMessageMap> = {
  type: T;
  detail: AppMessageMap[T];
};

export const isAppMessageType = <T extends AppMessageType>(
  type: T,
  message: unknown
): message is AppMessage<T> => {
  const straw = message as AppMessage<T>;
  return typeof straw === "object" && straw.type === type;
};
