import { parseAipl } from "./parseAipl";
import { evaluateAiplProgram } from "./runtime/evaluateAiplProgram";
import { evaluateBinaryNodeToNumber } from "./runtime/evaluateBinaryNodeNumber";
import { evaluateListNodeToOperatorObjects } from "./runtime/evaluateListNodeToOperatorObjects";
import { evaluateNodeToBoolean } from "./runtime/evaluateNodeToBoolean";
import { evaluateNodeToNumber } from "./runtime/evaluateNodeToNumber";
import { evaluateNodeToString } from "./runtime/evaluateNodeToString";
import { renderAiplProgramText } from "./runtime/renderAiplProgramText";
import { tryParseAipl } from "./tryParseAipl";

export const Aipls = {
  tryParseAipl,
  parseAipl,
  renderAiplProgramText,
  evaluateAiplProgram,

  // internal partial evaluators
  evaluateNodeToString,
  evaluateNodeToNumber,
  evaluateNodeToBoolean,
  evaluateBinaryNodeToNumber,
  evaluateListNodeToOperatorObjects,
};
