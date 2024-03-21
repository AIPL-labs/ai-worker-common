import { isDefined } from "@mjtdev/engine";
import { produce } from "immer";
import { evaluateAiplCode } from "./evaluateAiplCode";
import { evaluateNodeToString } from "./evaluateNodeToString";
export const evaluateListNodeToOperatorObjects = (context) => (node) => {
    const colonOpObj = {};
    const equalOpObj = {};
    for (const entry of node.values) {
        const { key, op, value } = entry;
        const stringValue = evaluateNodeToString(context)(value);
        switch (op) {
            case ":": {
                colonOpObj[key] = stringValue;
                continue;
            }
            case "=":
                {
                    equalOpObj[key] = stringValue;
                    continue;
                }
                throw new Error(`evaluateListNodeToOperatorObjects unexpected op: '${op}'`);
        }
    }
    return {
        ":": colonOpObj,
        "=": equalOpObj,
    };
};
export const evaluateAiplProgram = (context) => (node) => {
    // context.logger("evaluateAiplProgram", { node, context });
    let result = produce(context, () => { });
    for (const childNode of node.value) {
        try {
            switch (childNode.type) {
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
                    // context.logger(`templateVariable : ${childNode.loc.start.offset}`, {
                    //   childNode,
                    //   rendered,
                    //   stateValue,
                    // });
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
                                ? evaluateListNodeToOperatorObjects(context)(childNode.question.args)
                                : undefined;
                            context.assignUrlFunctionToIdentifier({
                                urlFunction: childNode.question,
                                identifier: childNode.identifier,
                                data: operatorObjects?.[":"],
                                headers: operatorObjects?.["="],
                            });
                            continue;
                        }
                    }
                    // context.assignAnswerToIdentifier({
                    //   question: evaluateNodeToString(context)(childNode.question),
                    //   identifier: childNode.identifier,
                    // });
                    continue;
                }
                // case "conditionalAssignment": {
                //   if (evaluateNodeToBoolean(context)(childNode.condition)) {
                //     context.assignAnswerToIdentifier({
                //       question: evaluateNodeToString(context)(childNode.question),
                //       identifier: childNode.identifier,
                //     });
                //   }
                //   // TODO conditional assignment
                // }
            }
        }
        catch (error) {
            throw {
                cause: error,
                context,
                message: "Unexpected program error",
                loc: childNode.loc,
                node: childNode,
            };
        }
    }
    return result;
};
//# sourceMappingURL=evaluateAiplProgram.js.map