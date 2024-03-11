import { parseAipl } from "./parseAipl";
import { evaluateAiplProgram } from "./runtime/evaluateAiplProgram";
import { renderAiplProgramText } from "./runtime/renderAiplProgramText";
import { tryParseAipl } from "./tryParseAipl";

export const Aipls = {
  evaluateAiplProgram,
  tryParseAipl,
  parseAipl,
  renderAiplProgramText,
};
