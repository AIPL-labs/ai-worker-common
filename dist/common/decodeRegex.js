export const decodeRegex = (text, regex) => {
    const matches = Array.from(text.matchAll(new RegExp(regex, "mg")));
    return matches.map((m) => m[1]);
};
//# sourceMappingURL=decodeRegex.js.map