import { createAiplLanguage } from "./createAiplLanguage";
import { type AiplLangageParams } from "./AiplLangageParams";

export const parseAipl = (text: string, params: AiplLangageParams = {}) => {
  const lang = createAiplLanguage(params);
  return lang.program.parse(text);
};
