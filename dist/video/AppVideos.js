import { Bytes, isUndefined } from "@mjtdev/engine";
export const videoPackToVideoRecords = (videoPack) => {
    if (isUndefined(videoPack)) {
        return {};
    }
    return Bytes.msgPackToObject(new Uint8Array(videoPack));
};
export const videoRecordsToVideoPack = (videoRecords = {}) => {
    return Bytes.toMsgPack(videoRecords);
};
export const AppVideos = { videoPackToVideoRecords, videoRecordsToVideoPack };
//# sourceMappingURL=AppVideos.js.map