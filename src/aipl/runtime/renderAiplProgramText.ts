import { Prompts } from "../../ai/prompt/Prompts";
import { Aipls } from "../Aipls";
import { AiplContext } from "./AiplContext";


export const renderAiplProgramText = (
  programText: string,
  context: AiplContext
) => {
  try {
    context.logger("renderAiplProgramText", {context, programText})
    const program = Aipls.tryParseAipl(programText);
    const updatedContext = Aipls.evaluateAiplProgram(context)(program);
    return updatedContext.texts.join("");
  } catch (error) {
    context.error(error);
    // context.logger("Error evaluating AIPL program", { program, context });
    return Prompts.renderTemplateText(programText, context.state);
  }
};
