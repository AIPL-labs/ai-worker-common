import type { AppMessage } from "../type/app-message/AppMessage";
import type { AppMessageType } from "type/app-message/AppMessageType";
export declare const dispatch: <T extends AppMessageType = keyof import("..").AppMessageMap>(ws: WebSocket, message: AppMessage<T>) => Promise<void>;
//# sourceMappingURL=dispatch.d.ts.map