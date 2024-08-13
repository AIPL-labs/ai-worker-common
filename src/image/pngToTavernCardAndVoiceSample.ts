import type { IPngMetadataTextualData } from "@lunapaint/png-codec";
import { decodePng } from "@lunapaint/png-codec";
import type { ByteLike } from "@mjtdev/engine";
import { Bytes, safe } from "@mjtdev/engine";
import type { TavernCardV2 } from "../type/app-character/TavernCardV2";
import {
  PNG_KEYWORD_TAVERNCARD,
  PNG_KEYWORD_VIDEOS,
  PNG_KEYWORD_VOICE_SAMPLE,
} from "./PNG_KEYWORDS";
import { jsonToTavernCardV2 } from "./jsonToTavernCardV2";

export const pngToTavernCardAndVoiceSample = async (
  bytes: ByteLike | undefined
): Promise<
  Partial<{
    card: TavernCardV2;
    voiceSample: ArrayBuffer;
    videoPack: ArrayBuffer;
  }>
> => {
  if (!bytes) {
    return {};
  }
  const fileAb = await Bytes.toArrayBuffer(bytes);
  const decoded = await decodePng(new Uint8Array(fileAb), {
    parseChunkTypes: "*",
  });
  const textChunks = decoded.metadata.filter(
    (e) => e.type === "tEXt"
  ) as IPngMetadataTextualData[];

  const result: Partial<{
    card: TavernCardV2;
    voiceSample: ArrayBuffer;
    videoPack: ArrayBuffer;
  }> = {};

  {
    const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_TAVERNCARD);
    if (chunk) {
      const ab = Bytes.base64ToArrayBuffer(chunk.text);
      const utf8 = Bytes.arrayBufferToUtf8(ab);
      const json = safe(() => JSON.parse(utf8));
      result.card = jsonToTavernCardV2(json);
    }
  }

  {
    const chunk = textChunks.find(
      (c) => c.keyword === PNG_KEYWORD_VOICE_SAMPLE
    );
    if (chunk) {
      const ab = Bytes.base64ToArrayBuffer(chunk.text);

      result.voiceSample = ab;
    }
  }
  {
    const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_VIDEOS);
    if (chunk) {
      const ab = Bytes.base64ToArrayBuffer(chunk.text);

      result.videoPack = ab;
    }
  }

  return result;
};
