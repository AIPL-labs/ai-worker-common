import type { AiplAstSpec } from "../AiplAstSpec";
import type { AiplNodePrimitiveEvaluator } from "./AiplNodeEvaluator";
import { evaluateNodeToString } from "./evaluateNodeToString";


export const evaluateListNodeToOperatorObjects: AiplNodePrimitiveEvaluator<
  "list", Record<AiplAstSpec["entry"]["op"], Record<string, string>>
> = (context) => (node) => {
  const colonOpObj: Record<string, string> = {};
  const equalOpObj: Record<string, string> = {};
  const doubleEqualOpObj: Record<string, string> = {};
  for (const entry of node.values) {
    const { key, op, value } = entry;
    const stringValue = evaluateNodeToString(context)(value);
    switch (op) {
      case ":": {
        colonOpObj[key] = stringValue;
        continue;
      }
      case "=": {
        equalOpObj[key] = stringValue;
        continue;
      }
      case "==":
        {
          doubleEqualOpObj[key] = stringValue;
          continue;
        }
        throw new Error(
          `evaluateListNodeToOperatorObjects unexpected op: '${op}'`
        );
    }
  }

  return {
    ":": colonOpObj,
    "=": equalOpObj,
    "==": doubleEqualOpObj,
  };
};
