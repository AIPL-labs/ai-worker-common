import { produce } from "immer";
import { evaluateAiplProgram } from "./evaluateAiplProgram";
import { evaluateNodeToBoolean } from "./evaluateNodeToBoolean";
export const evaluateAiplCode = (context) => (node) => {
    context.logger("evaluateAiplCode", { node });
    const result = produce(context, () => { });
    const { body, condition } = node;
    const conditionEvaluation = evaluateNodeToBoolean(context)(condition);
    context.logger("evaluateAiplCode condition", {
        condition,
        conditionEvaluation,
    });
    if (conditionEvaluation) {
        return evaluateAiplProgram(result)(body);
    }
    return context;
};
//# sourceMappingURL=evaluateAiplCode.js.map