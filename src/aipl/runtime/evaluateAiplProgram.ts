import { isDefined, isUndefined } from "@mjtdev/engine";
import { produce } from "immer";
import type { AiplAstSpec } from "../AiplAstSpec";
import type { AiplError } from "./AiplError";
import type {
  AiplNodeEvaluator,
  AiplNodePrimitiveEvaluator,
} from "./AiplNodeEvaluator";
import { evaluateAiplCode } from "./evaluateAiplCode";
import { evaluateNodeToString } from "./evaluateNodeToString";

export const evaluateListNodeToOperatorObjects: AiplNodePrimitiveEvaluator<
  "list",
  Record<AiplAstSpec["entry"]["op"], Record<string, string>>
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

export const evaluateAiplProgram: AiplNodeEvaluator<"program"> =
  (context) => (node) => {
    // context.logger("evaluateAiplProgram", { node, context });
    let result = produce(context, () => {});
    for (const childNode of node.value) {
      try {
        switch (childNode.type) {
          case "escapedSymbol": {
            result = produce(result, (r) => {
              r.texts.push(childNode.value);
            });
            continue;
          }
          case "text": {
            result = produce(result, (r) => {
              r.texts.push(childNode.value);
            });
            continue;
          }
          case "templateVariable": {
            const stateValue = context.state[childNode.identifier.value];
            const rendered = isDefined(stateValue)
              ? stateValue
              : childNode.defaultValue;
            if (isDefined(rendered)) {
              result = produce(result, (r) => {
                r.texts.push(rendered);
              });
            }
            continue;
          }
          case "code": {
            result = evaluateAiplCode(result)(childNode);
            continue;
          }
          case "comment": {
            // no-op for comments
            continue;
          }

          case "directAssignment": {
            switch (childNode.question.type) {
              case "stringLiteral": {
                context.assignValueStringToIdentifier({
                  value: evaluateNodeToString(context)(childNode.question),
                  identifier: childNode.identifier,
                });
                continue;
              }
            }
            continue;
          }
          case "assignment": {
            switch (childNode.question.type) {
              case "stringLiteral": {
                context.assignQuestionStringToIdentifier({
                  question: evaluateNodeToString(context)(childNode.question),
                  identifier: childNode.identifier,
                });
                continue;
              }
              case "urlFunction": {
                const operatorObjects = childNode.question.args
                  ? evaluateListNodeToOperatorObjects(context)(
                      childNode.question.args
                    )
                  : undefined;
                const urlFunction = childNode.question;
                const pathString =
                  typeof urlFunction.url.path === "string"
                    ? urlFunction.url.path
                    : isUndefined(urlFunction.url.path)
                    ? undefined
                    : evaluateNodeToString(context)(urlFunction.url.path);

                const url = [
                  urlFunction.url.scheme,
                  "://",
                  urlFunction.url.host,
                  isDefined(urlFunction.url?.port)
                    ? `:${urlFunction.url.port}`
                    : undefined,
                  isDefined(pathString) ? `/${pathString}` : undefined,
                  urlFunction.url.query,
                ]
                  .filter(isDefined)
                  .join("");

                context.assignUrlFunctionToIdentifier({
                  url,
                  urlFunction: childNode.question,
                  identifier: childNode.identifier,
                  data: operatorObjects?.[":"],
                  headers: operatorObjects?.["="],
                  specials: operatorObjects?.["=="],
                });
                continue;
              }
            }
            continue;
          }
        }
      } catch (error) {
        throw {
          cause: error,
          context,
          message: "Unexpected program error",
          loc: childNode.loc,
          node: childNode,
        } satisfies AiplError;
      }
    }
    return result;
  };
