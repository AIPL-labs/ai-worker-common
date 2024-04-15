import type { AppMessage } from "../type/app-message/AppMessage";
export declare const dispatch: <T extends keyof import("..").AppMessageMap = keyof import("..").AppMessageMap>(ws: WebSocket, message: AppMessage<T>) => Promise<void>;
//# sourceMappingURL=dispatch.d.ts.map