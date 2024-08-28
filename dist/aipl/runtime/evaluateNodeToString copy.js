export const evaluateNodeToString = (context) => (node) => {
    // context.logger("evaluateNodeToString", { node });
    switch (node.type) {
        case "stringLiteral": {
            return evaluateNodeToString(context)(node.value);
        }
        case "template": {
            const { value } = node;
            const buffer = [];
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
    }
};
//# sourceMappingURL=evaluateNodeToString%20copy.js.map