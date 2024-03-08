import { createAiplLanguage } from "./createAiplLanguage";
export const tryParseAipl = (text) => {
    const lang = createAiplLanguage();
    return lang.program.tryParse(text);
};
//# sourceMappingURL=tryParseAipl.js.map