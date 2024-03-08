import { createAiplLanguage } from "./createAiplLanguage";
export const parseAipl = (text) => {
    const lang = createAiplLanguage();
    return lang.program.parse(text);
};
//# sourceMappingURL=parseAipl.js.map