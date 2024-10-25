import { decodePng, encodePng } from "@lunapaint/png-codec";
import { Bytes, isDefined } from "@mjtdev/engine";
import { PNG_KEYWORD_TAVERNCARD, PNG_KEYWORD_VIDEOS, PNG_KEYWORD_VOICE_SAMPLE, } from "./PNG_KEYWORDS";
import { AppVideos } from "../video/AppVideos";
const AVATAR_3D_CHUNK_SIZE = 8 * 1024 * 1024; // 8MB chunks
const splitIntoChunks = (data, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < data.byteLength; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }
    return chunks;
};
export const decomposedAppCharacterToPng = async ({ character, image, voiceSample, videos, avatar3d, }) => {
    if (!image) {
        throw new Error("decomposedAppCharacterToPng: No image");
    }
    const fileAb = await Bytes.toArrayBuffer(image);
    const decoded = await decodePng(new Uint8Array(fileAb));
    const { card } = character;
    const cardJsonBytes = await Bytes.toArrayBuffer(JSON.stringify(card));
    const cardText = Bytes.arrayBufferToBase64(cardJsonBytes);
    const voiceBytes = voiceSample
        ? await Bytes.toArrayBuffer(voiceSample)
        : undefined;
    const voiceText = voiceBytes
        ? Bytes.arrayBufferToBase64(voiceBytes)
        : undefined;
    const avatar3dBytes = avatar3d
        ? await Bytes.toArrayBuffer(avatar3d)
        : undefined;
    const avatar3dChunks = avatar3dBytes
        ? splitIntoChunks(avatar3dBytes, AVATAR_3D_CHUNK_SIZE).map((chunk, index) => ({
            type: "tEXt",
            keyword: `chara.avatar3d.${index}`,
            text: Bytes.arrayBufferToBase64(chunk),
        }))
        : [];
    const videosText = videos
        ? Bytes.arrayBufferToBase64(AppVideos.videoRecordsToVideoPack(videos))
        : undefined;
    const voiceChunk = voiceText
        ? {
            type: "tEXt",
            keyword: PNG_KEYWORD_VOICE_SAMPLE,
            text: voiceText,
        }
        : undefined;
    const videosChunk = videosText
        ? {
            type: "tEXt",
            keyword: PNG_KEYWORD_VIDEOS,
            text: videosText,
        }
        : undefined;
    const encoded = await encodePng(decoded.image, {
        ancillaryChunks: [
            {
                type: "tEXt",
                keyword: PNG_KEYWORD_TAVERNCARD,
                text: cardText,
            },
            voiceChunk,
            videosChunk,
            ...avatar3dChunks, // Spread the avatar3d chunks
        ].filter(isDefined),
    });
    return new Blob([encoded.data], { type: "image/png" });
};
//# sourceMappingURL=decomposedAppCharacterToPng.js.map