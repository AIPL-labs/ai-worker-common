import type { IPngMetadataTextualData } from "@lunapaint/png-codec";
import { decodePng, encodePng } from "@lunapaint/png-codec";
import { ByteLike, Bytes, isDefined } from "@mjtdev/engine";
import { TavernCardV2 } from "../type/app-character/TavernCardV2";
import {
  PNG_KEYWORD_AVATAR_3D,
  PNG_KEYWORD_TAVERNCARD,
  PNG_KEYWORD_VIDEOS,
  PNG_KEYWORD_VOICE_SAMPLE,
} from "./PNG_KEYWORDS";
import type { DecomposedAppCharacter } from "../type/app-character/AppCharacter";
import { AppVideos } from "../video/AppVideos";

const AVATAR_3D_CHUNK_SIZE = 8 * 1024 * 1024; // 8MB chunks

const splitIntoChunks = (data: ArrayBuffer, chunkSize: number) => {
  const chunks: ArrayBuffer[] = [];
  for (let i = 0; i < data.byteLength; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

export const decomposedAppCharacterToPng = async ({
  character,
  image,
  voiceSample,
  videos,
  avatar3d,
}: DecomposedAppCharacter) => {
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

  const avatar3dChunks: IPngMetadataTextualData[] = avatar3dBytes
    ? splitIntoChunks(avatar3dBytes, AVATAR_3D_CHUNK_SIZE).map(
        (chunk, index) => ({
          type: "tEXt",
          keyword: `chara.avatar3d.${index}`,
          text: Bytes.arrayBufferToBase64(chunk),
        })
      )
    : [];

  const videosText = videos
    ? Bytes.arrayBufferToBase64(AppVideos.videoRecordsToVideoPack(videos))
    : undefined;

  const voiceChunk: IPngMetadataTextualData | undefined = voiceText
    ? {
        type: "tEXt",
        keyword: PNG_KEYWORD_VOICE_SAMPLE,
        text: voiceText,
      }
    : undefined;

  const videosChunk: IPngMetadataTextualData | undefined = videosText
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
      } as const,
      voiceChunk,
      videosChunk,
      ...avatar3dChunks, // Spread the avatar3d chunks
    ].filter(isDefined),
  });
  return new Blob([encoded.data], { type: "image/png" });
};
