import { decodeRegex } from "./decodeRegex";
export const decodeQuoatedStrings = (text) => {
    const quotedStringsRegex = new RegExp(`"(.*?)"`, "mg");
    return decodeRegex(text, quotedStringsRegex);
};
//# sourceMappingURL=decodeQuoatedStrings.js.map