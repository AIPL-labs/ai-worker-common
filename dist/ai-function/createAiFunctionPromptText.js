import { Objects } from "@mjtdev/engine";
import { AI_FUNCTIONS } from "./AI_FUNCTIONS";
import { AI_FUNCTION_PREFIX } from "./AI_FUNCTION_TOKEN";
// import { Chat } from "ai-worker-common";
// import { AI_FUNCTION_PREFIX } from "../chat/addFunctionsToChat";
// import { AI_FUNCTIONS } from "./setupAiFunctions";
export const createAiFunctionPromptText = ({ aiName, userName, functions, }) => {
    const aiFuncPrompts = AI_FUNCTIONS.filter((aiFunc) => functions.includes(aiFunc.name))
        .map((f) => {
        const { name, usage, params = [] } = f;
        const manyParams = Objects.toMany(params);
        const paramsUsages = manyParams.map((p) => {
            const { name, description } = p;
            return `// var:${name} is the ${description}`;
        });
        const paramsCallSignature = manyParams
            .map((p) => {
            const { name, type = "string" } = p;
            return `${name}:${type}`;
        })
            .join(", ");
        const funcCallSignature = [
            `${AI_FUNCTION_PREFIX}${name}(${paramsCallSignature});`,
        ];
        return [
            `// function for ${usage}`,
            ...paramsUsages,
            funcCallSignature,
            "",
        ];
    })
        .flat();
    if (aiFuncPrompts.length === 0) {
        return undefined;
    }
    const example = `
# Example function call response:

<|im_start|>${userName}
open a dialog with the message hello world<|im_end|>
<|im_start|>${aiName}
${AI_FUNCTION_PREFIX}openDialog("hello world");<|im_end|>

# Example of natural language response:

<|im_start|>${userName}
hello<|im_end|>
<|im_start|>${aiName}
hello there!<|im_end|>
`;
    const direction = `
Whenever you want to perform a function call DO NOT RESPOND with natural language!
instead call the function in your next response as the example function calls above show.
ONLY CALL FUNCTIONS IN THE ABOVE KNOWN FUNCTIONS LIST!
Mostly ${aiName} will respond with natural language.
Only respond with function calls when needed!!!
Only prefix function calls with ${AI_FUNCTION_PREFIX}
  `;
    return [
        `${aiName} knows about the following function calls:`,
        "",
        "# Known Functions",
        ...aiFuncPrompts,
        "",
        example,
        direction,
    ].join("\n");
};
//# sourceMappingURL=createAiFunctionPromptText.js.map