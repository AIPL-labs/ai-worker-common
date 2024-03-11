import { evaluateNodeToString } from "./evaluateNodeToString";
export const evaluateNodeToNumber = (context) => (node) => {
    // context.logger("evaluateNodeToNumber", { node });
    const trace = (message) => {
        context.logger(`evaluateNodeToNumber ${node.loc.start.offset} ${node.type} ${message}`, { node });
    };
    trace("start");
    switch (node.type) {
        case "stringLiteral": {
            const softNumber = context.softFunctionToNumber(evaluateNodeToString(context)(node.value), node);
            trace(`stringLiteral softNumber: ${softNumber}`);
            return softNumber;
        }
        case "expr": {
            return evaluateNodeToNumber(context)(node.value);
        }
        case "binaryExpr": {
            // TODO compound expression numeric conversion
            context.logger("evaluateNodeToNumber: UNEXPECTED binaryExpr", { node });
            return 0;
        }
        // case "compoundExpr": {
        //   const { left, op, right } = node;
        //   switch (op.value) {
        //     // logical and
        //     case "&&":
        //     case "&": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue && evaluateNodeToNumber(context)(right);
        //     }
        //     // logical or
        //     case "||":
        //     case "|": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue || evaluateNodeToNumber(context)(right);
        //     }
        //     // comparision operators
        //     case "!==":
        //     case "!=": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue !== evaluateNodeToNumber(context)(right);
        //     }
        //     case "==":
        //     case "=": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue === evaluateNodeToNumber(context)(right);
        //     }
        //     case "<": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue < evaluateNodeToNumber(context)(right);
        //     }
        //     case ">": {
        //       const leftValue = evaluateNodeToNumber(context)(left);
        //       return leftValue > evaluateNodeToNumber(context)(right);
        //     }
        //   }
        // }
        case "unaryExpr": {
            // unary number-like
            return 0;
            // return ! node.operand.value;
        }
        case "number": {
            return node.value;
        }
        case "identifier": {
            const stateValue = context.state[node.value];
            trace(`stateValue: ${stateValue}`);
            if (!stateValue) {
                return 0;
            }
            return context.stringToNumber(stateValue, node);
        }
        // case "function": {
        //   return context.softFunctionToNumber(node);
        // }
    }
};
//# sourceMappingURL=evaluateNodeToNumber.js.map