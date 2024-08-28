import { createAiplLanguage } from "./createAiplLanguage";
export const parseAipl = (text, params = {}) => {
    const lang = createAiplLanguage(params);
    return lang.program.parse(text);
};
//# sourceMappingURL=parseAipl.js.map