import { decodePng } from "@lunapaint/png-codec";
import { Bytes, safe } from "@mjtdev/engine";
import { PNG_KEYWORD_TAVERNCARD, PNG_KEYWORD_VIDEOS, PNG_KEYWORD_VOICE_SAMPLE, } from "./PNG_KEYWORDS";
import { jsonToTavernCardV2 } from "./jsonToTavernCardV2";
const reassembleChunks = (chunks) => {
    const buffers = chunks.map((chunk) => Bytes.base64ToArrayBuffer(chunk.text));
    const totalSize = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
    const result = new Uint8Array(totalSize);
    let offset = 0;
    buffers.forEach((buffer) => {
        result.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
    });
    return result.buffer;
};
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
    // Extract Tavern Card
    {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_TAVERNCARD);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            const utf8 = Bytes.arrayBufferToUtf8(ab);
            const json = safe(() => JSON.parse(utf8));
            result.card = jsonToTavernCardV2(json);
        }
    }
    // Extract Voice Sample
    if (extraExtractions.includes("voiceSample")) {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_VOICE_SAMPLE);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            result.voiceSample = ab;
        }
    }
    // Extract Video Pack
    if (extraExtractions.includes("videoPack")) {
        const chunk = textChunks.find((c) => c.keyword === PNG_KEYWORD_VIDEOS);
        if (chunk) {
            const ab = Bytes.base64ToArrayBuffer(chunk.text);
            result.videoPack = ab;
        }
    }
    // Extract Avatar3D (Handle chunked data)
    if (extraExtractions.includes("avatar3d")) {
        // Gather all avatar3d chunks based on the index in the keyword (e.g., chara.avatar3d.0, chara.avatar3d.1, etc.)
        const avatar3dChunks = textChunks
            .filter((chunk) => chunk.keyword.startsWith("chara.avatar3d."))
            .sort((a, b) => {
            const indexA = parseInt(a.keyword.split(".").pop() || "0", 10);
            const indexB = parseInt(b.keyword.split(".").pop() || "0", 10);
            return indexA - indexB;
        });
        if (avatar3dChunks.length > 0) {
            const reassembledAvatar3d = reassembleChunks(avatar3dChunks);
            result.avatar3d = reassembledAvatar3d;
        }
    }
    return result;
};
//# sourceMappingURL=pngToTavernCardAndVoiceSample.js.map