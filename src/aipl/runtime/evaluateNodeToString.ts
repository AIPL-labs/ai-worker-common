import { isDefined, isUndefined } from "@mjtdev/engine";
import type { AiplNodePrimitiveEvaluator } from "./AiplNodeEvaluator";

export const evaluateNodeToString: AiplNodePrimitiveEvaluator<
  | "template"
  | "templateVariable"
  | "stringLiteral"
  | "identifier"
  | "transformExpr",
  string
> = (context) => (node) => {
  // context.logger("evaluateNodeToString", { node });
  switch (node.type) {
    case "stringLiteral": {
      return evaluateNodeToString(context)(node.value);
    }
    case "template": {
      const { value } = node;
      const buffer: string[] = [];
      for (const child of value) {
        if (typeof child === "string") {
          buffer.push(child);
          continue;
        }
        const part = evaluateNodeToString(context)(child);
        buffer.push(part);
      }
      return buffer.join("");
    }
    case "templateVariable": {
      const { transformExpr, defaultValue = "" } = node;
      const { identifier, transform } = transformExpr;
      const value = context.state[identifier.value] ?? defaultValue;
      if (isUndefined(transform)) {
        return value;
      }
      return context.transform({
        name: transform.name,
        value,
        // TODO transform argument
        // argument: transform.arg,
      });
    }
    case "identifier": {
      return context.state[node.value] ?? "";
    }
    case "transformExpr": {
      const { identifier, transform } = node;
      const identifierValue = evaluateNodeToString(context)(identifier);
      return isDefined(transform)
        ? context.transform({ name: transform.name, value: identifierValue })
        : identifierValue;
    }
  }
};
