import {
  IPngMetadataTextualData,
  decodePng,
  encodePng,
} from "@lunapaint/png-codec";
import { ByteLike, Bytes, isDefined } from "@mjtdev/engine";
import { TavernCardV2 } from "../type/app-character/TavernCardV2";
import {
  PNG_KEYWORD_TAVERNCARD,
  PNG_KEYWORD_VOICE_SAMPLE,
} from "./PNG_KEYWORDS";
import { DecomposedAppCharacter } from "../type/app-character/AppCharacter";

export const decomposedAppCharacterToPng = async ({
  character,
  image,
  voiceSample,
}: DecomposedAppCharacter) => {
  if (!image) {
    throw new Error("decomposedAppCharacterToPng: No image");
  }
  const fileAb = await Bytes.toArrayBuffer(image);
  const decoded = await decodePng(new Uint8Array(fileAb));
  const { card } = character;

  const cardJsonBytes = await Bytes.toArrayBuffer(JSON.stringify(card));
  const cardText = Bytes.arrayBufferToBase64(cardJsonBytes);

  // const ab = await Bytes.toArrayBuffer(voiceSample);
  // const voiceBytes = voiceSample(() => {
  //   console.log("voiceBytes: ab", ab);
  //   return ab;
  // })();

  const voiceBytes = voiceSample
    ? await Bytes.toArrayBuffer(voiceSample)
    : undefined;

  const voiceText = voiceBytes
    ? Bytes.arrayBufferToBase64(voiceBytes)
    : undefined;

  const voiceChunk: IPngMetadataTextualData | undefined = voiceText
    ? {
        type: "tEXt",
        keyword: PNG_KEYWORD_VOICE_SAMPLE,
        text: voiceText,
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
    ].filter(isDefined),
  });
  return new Blob([encoded.data], { type: "image/png" });
};
