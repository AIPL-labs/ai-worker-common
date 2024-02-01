import { AI_FUNCTIONS } from "./AI_FUNCTIONS";
import { AI_FUNCTION_PREFIX, AI_FUNCTION_SYMBOL } from "./AI_FUNCTION_TOKEN";
import { createAiFunctionPromptText } from "./createAiFunctionPromptText";
import { parseAiFunctionText } from "./parseAiFunctionText";

export const AiFunctions = {
  createAiFunctionPromptText,
  parseAiFunctionText,
  AI_FUNCTIONS,
  AI_FUNCTION_SYMBOL,
  AI_FUNCTION_PREFIX,
};
