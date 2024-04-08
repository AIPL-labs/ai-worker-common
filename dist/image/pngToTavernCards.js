import { decodePng } from "@lunapaint/png-codec";
import { Bytes, isDefined, safe } from "@mjtdev/engine";
import { PNG_KEYWORD_TAVERNCARD } from "./PNG_KEYWORDS";
import { jsonToTavernCardV2 } from "./jsonToTavernCardV2";
export const pngToTavernCards = async (bytes) => {
    console.log("pngToTavernCards", { bytes });
    if (!bytes) {
        return [];
    }
    const fileAb = await Bytes.toArrayBuffer(bytes);
    const decoded = await decodePng(new Uint8Array(fileAb), {
        parseChunkTypes: "*",
    });
    const textChunks = decoded.metadata.filter((e) => e.type === "tEXt");
    const charaChunks = textChunks.filter((c) => c.keyword === PNG_KEYWORD_TAVERNCARD);
    return (await Promise.all(charaChunks.map(async (c) => {
        const textAb = Bytes.base64ToArrayBuffer(c.text);
        const utf8 = Bytes.arrayBufferToUtf8(textAb);
        const json = safe(() => JSON.parse(utf8));
        return jsonToTavernCardV2(json);
    }))).filter(isDefined);
};
//# sourceMappingURL=pngToTavernCards.js.map