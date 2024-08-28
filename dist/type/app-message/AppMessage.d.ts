import type { AppMessageMap } from "./AppMessageMap";
export type AppMessage<T extends keyof AppMessageMap = keyof AppMessageMap> = {
    type: T;
    detail: AppMessageMap[T];
};
export declare const isAppMessageType: <T extends keyof AppMessageMap>(type: T, message: unknown) => message is AppMessage<T>;
//# sourceMappingURL=AppMessage.d.ts.map