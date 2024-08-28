import { Bytes } from "@mjtdev/engine";
export const dispatch = async (ws, message) => {
    if (!ws) {
        console.log("refusing to dispatch, no getWs function");
        return;
    }
    // ws.send(JSON.stringify(message));
    ws.send(Bytes.toMsgPack(message));
};
//# sourceMappingURL=dispatch.js.map