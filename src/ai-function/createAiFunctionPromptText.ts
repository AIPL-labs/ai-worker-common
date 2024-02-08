import { Objects, isDefined } from "@mjtdev/engine";
import { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import { AI_FUNCTION_PREFIX } from "./AI_FUNCTION_TOKEN";
import { renderCardText } from "../ai-character/renderCardText";

export const createAiFunctionPromptText = ({
  aiName,
  userName,
  functions,
}: {
  functions: AiFunctionDescription[];
  aiName: string;
  userName: string;
}) => {
  const aiFuncPrompts = functions
    .map((f) => {
      const { name, usage, params = [], direction } = f;
      const functionName = `${AI_FUNCTION_PREFIX}${name}`;
      const renderFacts = {
        user: userName,
        char: aiName,
        functionName,
      };
      const manyParams = Objects.toMany(params);
      const paramsUsages = manyParams.map((p) => {
        const { name, description } = p;
        return `// var:${name} is the ${renderCardText(
          description,
          renderFacts
        )}`;
      });
      const paramsCallSignature = manyParams
        .map((p) => {
          const { name, type = "string" } = p;
          return `${name}:${type}`;
        })
        .join(", ");
      const funcCallSignature = [`${functionName}(${paramsCallSignature});`];

      return [
        direction
          ? `# DIRECTIONS: ${renderCardText(direction, renderFacts)}`
          : undefined,
        "",
        `// function for ${renderCardText(usage, renderFacts)}`,
        ...paramsUsages,
        funcCallSignature,
        "",
      ].filter(isDefined);
    })
    .flat();

  if (aiFuncPrompts.length === 0) {
    return undefined;
  }

  const example = `
# Example function call response:

<|im_start|>${userName}
open the garage door named bay one<|im_end|>
<|im_start|>${aiName}
${AI_FUNCTION_PREFIX}openGarageDoor(name:"bay one");
garage door bay one opened.
<|im_end|>

`;

  // ${aiName} will respond with natural language with no function calls most of the time unless directed otherwise.
  // It is OK to use natural language AFTER the function call on the next line.
  // Pay attention to the directions and usage of each function call.
  const direction = `# Function Calls
  ${aiName} has the ability to call functions along with natural language responses.
  Whenever ${aiName} wants to perform a function call they do so without asking.
  ${aiName} ONLY CALLS FUNCTIONS IN THE Available Functions list!!!
  DO NOT CALL FUNCTIONS THAT ARE NOT AVAILABLE!!!
  Only prefix function calls with ${AI_FUNCTION_PREFIX} otherwise never use this emoji.
  Natural language responses do not use emojis
  NEVER tell ${userName} about function calls!
  NEVER ask ${userName} for permission to call functions, just do it!
    `;

  //   const direction = `# Function Call RULES for ${aiName}
  // ${aiName} ONLY CALLS FUNCTIONS IN THE Available Functions list!!!
  // DO NOT CALL FUNCTIONS THAT ARE NOT AVAILABLE!!!
  // Sometimes ${aiName} will need to call a function without specific direction from ${userName}
  // The functions are all available for ${aiName} and may be called at any time.
  // NEVER ask ${userName} for permission to call functions, just do it!
  //   `;
  return [
    direction,
    example,
    `${aiName} knows about the following function calls:`,
    "",
    "# Available Functions",
    ...aiFuncPrompts,
    "",
  ].join("\n");
};
