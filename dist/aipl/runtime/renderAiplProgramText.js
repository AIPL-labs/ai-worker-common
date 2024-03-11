import { Prompts } from "../../ai/prompt/Prompts";
import { Aipls } from "../Aipls";
export const renderAiplProgramText = (programText, context) => {
    try {
        context.logger("renderAiplProgramText", { context, programText });
        const program = Aipls.tryParseAipl(programText);
        const updatedContext = Aipls.evaluateAiplProgram(context)(program);
        return updatedContext.texts.join("");
    }
    catch (error) {
        context.error(error);
        // context.logger("Error evaluating AIPL program", { program, context });
        return Prompts.renderTemplateText(programText, context.state);
    }
};
//# sourceMappingURL=renderAiplProgramText.js.map