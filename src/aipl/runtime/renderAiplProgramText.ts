import { Prompts } from "../../ai/prompt/Prompts";
import { Aipls } from "../Aipls";
import type { AiplContext } from "./AiplContext";

export const renderAiplProgramText = (
  programText: string,
  context: AiplContext
) => {
  try {
    context.logger("renderAiplProgramText: programText and context", {
      context,
      programText,
    });
    const transforms = context.getAvailableTransforms();
    const program = Aipls.tryParseAipl(programText, { transforms });
    context.logger("renderAiplProgramText: program", program);
    const updatedContext = Aipls.evaluateAiplProgram(context)(program);
    return updatedContext.texts.join("");
  } catch (error) {
    context.error(error);
    return Prompts.renderTemplateText(programText, context.state);
  }
};
