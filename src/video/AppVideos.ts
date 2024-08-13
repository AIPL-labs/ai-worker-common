import { Bytes, isUndefined, type ByteLike } from "@mjtdev/engine";

export const videoPackToVideoRecords = (videoPack?: ArrayBuffer) => {
  if (isUndefined(videoPack)) {
    return {};
  }
  return Bytes.msgPackToObject(new Uint8Array(videoPack)) as Record<
    string,
    ArrayBuffer
  >;
};

export const videoRecordsToVideoPack = (
  videoRecords: Record<string, ByteLike | undefined> = {}
) => {
  return Bytes.toMsgPack(videoRecords);
};

export const AppVideos = { videoPackToVideoRecords, videoRecordsToVideoPack };
