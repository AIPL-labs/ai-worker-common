import { createAiplLanguage } from "./createAiplLanguage";

export const tryParseAipl = (text: string) => {
  const lang = createAiplLanguage();
  return lang.program.tryParse(text);
};


