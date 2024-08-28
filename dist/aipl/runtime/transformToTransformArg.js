import { isDefined } from "@mjtdev/engine";
import { evaluateNodeToString } from "./evaluateNodeToString";
export const transformToTransformArg = ({ transform, context, }) => {
    let transformArgument = undefined;
    if (isDefined(transform?.arg) && transform?.arg.type === "stringLiteral") {
        transformArgument = evaluateNodeToString(context)(transform.arg);
    }
    if (isDefined(transform?.arg) && transform?.arg.type === "program") {
        transformArgument = transform.arg;
    }
    return transformArgument;
};
//# sourceMappingURL=transformToTransformArg.js.map