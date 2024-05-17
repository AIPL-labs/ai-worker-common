import type { AiplNodePrimitiveEvaluator } from "./AiplNodeEvaluator";

export const evaluateNodeToString: AiplNodePrimitiveEvaluator<
  "template" | "templateVariable" | "stringLiteral" | "identifier",
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
      return context.state[node.identifier.value] ?? node.defaultValue ?? "";
    }
    case "identifier": {
      return context.state[node.value] ?? "";
    }
  }
};
