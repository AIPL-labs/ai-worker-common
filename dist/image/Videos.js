import { Bytes } from "@mjtdev/engine";
export const videoPackToVideoRecords = (videoPack) => {
    Bytes.msgPackToObject(new Uint8Array(videoPack));
};
export const videoRecordsToVideoPack = (videoRecords) => {
    Bytes.toMsgPack(videoRecords);
};
export const Videos = { videoPackToVideoRecords, videoRecordsToVideoPack };
//# sourceMappingURL=Videos.js.map