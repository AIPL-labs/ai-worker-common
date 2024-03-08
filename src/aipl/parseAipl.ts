import { createAiplLanguage } from "./createAiplLanguage";


export const parseAipl = (text: string) => {
  const lang = createAiplLanguage();
  return lang.program.parse(text);
};
