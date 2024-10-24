import { decodePng } from "@lunapaint/png-codec";
import { Bytes, safe } from "@mjtdev/engine";
import { PNG_KEYWORD_AVATAR_3D, PNG_KEYWORD_TAVERNCARD, PNG_KEYWORD_VIDEOS, PNG_KEYWORD_VOICE_SAMPLE, } from "./PNG_KEYWORDS";
import { jsonToTavernCardV2 } from "./jsonToTavernCardV2";
export const pngToTavernCardAndVoiceSample = async (bytes, options = {}) => {
    if (!bytes) {
        return {};
    }
    const { extraExtractions = [] } = options;
    const fileAb = await Bytes.toArrayBuffer(bytes);
    const decoded = await decodePng(new Uint8Array(fileAb), {
        parseChunkTypes: "*",
    });
    const textChunks = decoded.metadata.filter((e) => e.type === "tEXt");
    const result = {};
    {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_TAVERNCARD);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            const utf8 = Bytes.arrayBufferToUtf8(ab);
            const json = safe(() => JSON.parse(utf8));
            result.card = jsonToTavernCardV2(json);
        }
    }
    if (extraExtractions.includes("voiceSample")) {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_VOICE_SAMPLE);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            result.voiceSample = ab;
        }
    }
    if (extraExtractions.includes("videoPack")) {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_VIDEOS);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            result.videoPack = ab;
        }
    }
    if (extraExtractions.includes("avatar3d")) {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_AVATAR_3D);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            result.avatar3d = ab;
        }
    }
    return result;
};
//# sourceMappingURL=pngToTavernCardAndVoiceSample.js.map