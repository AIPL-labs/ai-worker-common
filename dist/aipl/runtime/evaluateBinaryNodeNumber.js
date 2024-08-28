import { evaluateNodeToString } from "./evaluateNodeToString";
export const evaluateBinaryNodeToNumber = (context) => (left, right, node) => {
    context.logger("evaluateBinaryNodeNumber: start", { left, right, node });
    const stringLeft = evaluateNodeToString(context)(left);
    const stringRight = evaluateNodeToString(context)(right);
    context.logger("evaluateBinaryNodeNumber: after string eval", {
        stringLeft,
        stringRight,
    });
    return context.softFunctionBinaryToNumber({
        left: stringLeft,
        right: stringRight,
        node,
    });
    // switch (left.type) {
    //   case "stringLiteral": {
    //     return evaluateNodeToString(context)(left.value);
    //   }
    //   case "identifier": {
    //     // return evaluateNodeToNumber(context)(left.value);
    //     throw "TBD";
    //   }
    //   // case "template": {
    //   //   const { value } = left;
    //   //   const buffer: string[] = [];
    //   //   for (const child of value) {
    //   //     if (typeof child === "string") {
    //   //       buffer.push(child);
    //   //       continue;
    //   //     }
    //   //     const part = evaluateNodeToString(context)(child);
    //   //     buffer.push(part);
    //   //   }
    //   //   return buffer.join("");
    //   // }
    //   // case "templateVariable": {
    //   //   return context.state[left.identifier.value] ?? left.defaultValue ?? "";
    //   // }
    // }
};
//# sourceMappingURL=evaluateBinaryNodeNumber.js.map