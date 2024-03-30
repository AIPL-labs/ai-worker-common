import { Prompts } from "../../ai/prompt/Prompts";
import { Aipls } from "../Aipls";
export const renderAiplProgramText = (programText, context) => {
    try {
        context.logger("renderAiplProgramText: programText and context", {
            context,
            programText,
        });
        const program = Aipls.tryParseAipl(programText);
        context.logger("renderAiplProgramText: program", program);
        const updatedContext = Aipls.evaluateAiplProgram(context)(program);
        return updatedContext.texts.join("");
    }
    catch (error) {
        context.error(error);
        return Prompts.renderTemplateText(programText, context.state);
    }
};
//# sourceMappingURL=renderAiplProgramText.js.map