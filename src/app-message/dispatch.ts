import { Bytes } from "@mjtdev/engine";
import type { AppMessage } from "../type/app-message/AppMessage";
import type { AppMessageType } from "type/app-message/AppMessageType";

export const dispatch = async <T extends AppMessageType = AppMessageType>(
  ws: WebSocket,
  message: AppMessage<T>
) => {
  if (!ws) {
    console.log("refusing to dispatch, no getWs function");
    return;
  }
  // ws.send(JSON.stringify(message));
  ws.send(Bytes.toMsgPack(message));
};
