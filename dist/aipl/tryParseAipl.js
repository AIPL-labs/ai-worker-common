import { createAiplLanguage } from "./createAiplLanguage";
export const tryParseAipl = (text, languageParams = {}) => {
    const lang = createAiplLanguage(languageParams);
    return lang.program.tryParse(text);
};
//# sourceMappingURL=tryParseAipl.js.map