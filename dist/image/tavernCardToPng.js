import { decodePng, encodePng, } from "@lunapaint/png-codec";
import { Bytes, isDefined } from "@mjtdev/engine";
import { PNG_KEYWORD_TAVERNCARD, PNG_KEYWORD_VOICE_SAMPLE, } from "./PNG_KEYWORDS";
export const decomposedAppCharacterToPng = async ({ card, image, voice, }) => {
    const fileAb = await Bytes.toArrayBuffer(image);
    const decoded = await decodePng(new Uint8Array(fileAb));
    const cardJsonBytes = await Bytes.toArrayBuffer(JSON.stringify(card));
    const cardText = Bytes.arrayBufferToBase64(cardJsonBytes);
    const voiceText = voice
        ? Bytes.arrayBufferToBase64(cardJsonBytes)
        : undefined;
    const voiceChunk = voiceText
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
            },
            voiceChunk,
        ].filter(isDefined),
    });
    return new Blob([encoded.data], { type: "image/png" });
};
//# sourceMappingURL=tavernCardToPng.js.map