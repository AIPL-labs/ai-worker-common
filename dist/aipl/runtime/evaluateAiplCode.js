import { produce } from "immer";
import { evaluateAiplProgram } from "./evaluateAiplProgram";
import { evaluateNodeToBoolean } from "./evaluateNodeToBoolean";
export const evaluateAiplCode = (context) => (node) => {
    context.logger("evaluateAiplCode", { node });
    let result = produce(context, () => { });
    const { body, condition } = node;
    if (evaluateNodeToBoolean(context)(condition)) {
        return evaluateAiplProgram(result)(body);
    }
    return context;
};
//# sourceMappingURL=evaluateAiplCode.js.map