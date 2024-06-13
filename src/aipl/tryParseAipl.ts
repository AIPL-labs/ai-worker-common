import type { AiplLangageParams } from "./AiplLangageParams";
import { createAiplLanguage } from "./createAiplLanguage";

export const tryParseAipl = (
  text: string,
  languageParams: AiplLangageParams = {}
) => {
  const lang = createAiplLanguage(languageParams);
  return lang.program.tryParse(text);
};
