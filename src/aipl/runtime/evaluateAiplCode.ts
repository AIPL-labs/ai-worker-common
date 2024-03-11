import { produce } from "immer";
import { AiplNodeEvaluator } from "./AiplNodeEvaluator";
import { evaluateAiplProgram } from "./evaluateAiplProgram";
import { evaluateNodeToBoolean } from "./evaluateNodeToBoolean";

export const evaluateAiplCode: AiplNodeEvaluator<"code"> =
  (context) => (node) => {
    context.logger("evaluateAiplCode", { node });

    let result = produce(context, () => {});
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
