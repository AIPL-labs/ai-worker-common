import { isDefined } from "@mjtdev/engine";
import type { AiplContext, TransfromArgument } from "./AiplContext";
import { evaluateNodeToString } from "./evaluateNodeToString";
import type { AiplAstSpec } from "../AiplAstSpec";


export const transformToTransformArg = ({
  transform, context,
}: {
  transform?: AiplAstSpec["transform"];
  context: AiplContext;
}) => {
  let transformArgument: TransfromArgument | undefined = undefined;
  if (isDefined(transform?.arg) && transform?.arg.type === "stringLiteral") {
    transformArgument = evaluateNodeToString(context)(transform.arg);
  }
  if (isDefined(transform?.arg) && transform?.arg.type === "program") {
    transformArgument = transform.arg;
  }
  return transformArgument;
};
