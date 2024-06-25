import { isDefined, isUndefined } from "@mjtdev/engine";
import { produce } from "immer";
import type { AiplError } from "./AiplError";
import type { AiplNodeEvaluator } from "./AiplNodeEvaluator";
import { evaluateAiplCode } from "./evaluateAiplCode";
import { evaluateListNodeToOperatorObjects } from "./evaluateListNodeToOperatorObjects";
import { evaluateNodeToString } from "./evaluateNodeToString";
import type { TransfromArgument } from "./AiplContext";

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
            const { transformExpr, defaultValue } = childNode;

            const transformArgument =
              isDefined(transformExpr.transform?.arg) &&
              transformExpr.transform?.arg.type === "stringLiteral"
                ? evaluateNodeToString(context)(transformExpr.transform.arg)
                : undefined;

            const stateValue = context.state[transformExpr.identifier.value];
            const rendered = isDefined(stateValue)
              ? stateValue
              : childNode.defaultValue;
            if (isDefined(rendered)) {
              const transformed = isDefined(transformExpr.transform)
                ? context.transform({
                    name: transformExpr.transform?.name,
                    value: rendered,
                    argument: transformArgument,
                  })
                : rendered;
              result = produce(result, (r) => {
                r.texts.push(transformed);
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
          case "multilineComment": {
            // no-op for comments
            continue;
          }

          case "directAssignment": {
            switch (childNode.question.type) {
              case "stringLiteral": {
                const { identifier, transform } = childNode.transformExpr;
                let transformArgument: TransfromArgument | undefined =
                  undefined;
                if (
                  isDefined(transform?.arg) &&
                  transform?.arg.type === "stringLiteral"
                ) {
                  transformArgument = evaluateNodeToString(context)(
                    transform.arg
                  );
                }
                if (
                  isDefined(transform?.arg) &&
                  transform?.arg.type === "program"
                ) {
                  transformArgument = transform.arg;
                }
                const value = evaluateNodeToString(context)(childNode.question);
                context.assignValueStringToIdentifier({
                  value,
                  identifier,
                  transformArgument,
                  transformName: transform?.name,
                  context,
                });
                continue;
              }
            }
            continue;
          }
          case "assignment": {
            switch (childNode.question.type) {
              case "stringLiteral": {
                const { transformExpr } = childNode;
                const transformArgument =
                  isDefined(transformExpr.transform?.arg) &&
                  transformExpr.transform?.arg.type === "stringLiteral"
                    ? evaluateNodeToString(context)(transformExpr.transform.arg)
                    : undefined;
                context.assignQuestionStringToIdentifier({
                  question: evaluateNodeToString(context)(childNode.question),
                  identifier: transformExpr.identifier,
                  transformName: transformExpr.transform?.name,
                  transformArgument,
                  context,
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
                const { transformExpr } = childNode;

                const { transform } = transformExpr;

                let transformArgument: TransfromArgument | undefined =
                  undefined;
                if (
                  isDefined(transform?.arg) &&
                  transform?.arg.type === "stringLiteral"
                ) {
                  transformArgument = evaluateNodeToString(context)(
                    transform.arg
                  );
                }
                if (
                  isDefined(transform?.arg) &&
                  transform?.arg.type === "program"
                ) {
                  transformArgument = transform.arg;
                }

                context.assignUrlFunctionToIdentifier({
                  url,
                  urlFunction: childNode.question,
                  identifier: transformExpr.identifier,
                  data: operatorObjects?.[":"],
                  headers: operatorObjects?.["="],
                  specials: operatorObjects?.["=="],
                  transformArgument,
                  transformName: transformExpr.transform?.name,
                  context,
                });
                continue;
              }
            }
            continue;
          }
        }
      } catch (error) {
        throw new Error("evaluateAiplProgram: Unexpected program error", {
          cause: error,
        });
        // throw {
        //   cause: error,
        //   context,
        //   message: "evaluateAiplProgram: Unexpected program error",
        //   loc: childNode.loc,
        //   node: childNode,
        // } satisfies AiplError;
      }
    }
    return result;
  };
