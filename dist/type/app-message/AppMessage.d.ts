import type { AppMessageMap } from "./AppMessageMap";
import type { AppMessageType } from "./AppMessageType";
export type AppMessage<T extends keyof AppMessageMap = keyof AppMessageMap> = {
    type: T;
    detail: AppMessageMap[T];
};
export declare const isAppMessageType: <T extends AppMessageType>(type: T, message: unknown) => message is AppMessage<T>;
//# sourceMappingURL=AppMessage.d.ts.map