import { evaluateNodeToString } from "./evaluateNodeToString";
export const evaluateListNodeToOperatorObjects = (context) => (node) => {
    const colonOpObj = {};
    const equalOpObj = {};
    const doubleEqualOpObj = {};
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
                throw new Error(`evaluateListNodeToOperatorObjects unexpected op: '${op}'`);
        }
    }
    return {
        ":": colonOpObj,
        "=": equalOpObj,
        "==": doubleEqualOpObj,
    };
};
//# sourceMappingURL=evaluateListNodeToOperatorObjects.js.map