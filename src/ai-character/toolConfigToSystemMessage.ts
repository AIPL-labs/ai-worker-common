import { isDefined, TypeBoxes } from "@mjtdev/engine";
import type { ToolConfig } from "../type/app-character/AppCharacter";
import { toolConfigCurrentToSystemMessage } from "./toolConfigCurrentToSystemMessage";

export const toolConfigToSystemMessage = (toolConfig: ToolConfig) => {
  const { typeDeclaration } = TypeBoxes.schemaToTypeInfo(toolConfig.schema);
  const typeName = toolConfig.schema.$id;
  const currentObject = toolConfig.current ?? {};
  return [
    "```typescript",
    typeDeclaration,
    "```",

    "",
    `Example Error object:`,
    "```json",
    ` {error: "No such key in object: '${typeName}'"}`,
    "```",
    "",
    Object.keys(currentObject).length > 0
      ? toolConfigCurrentToSystemMessage({
          typeName,
          currentObject: toolConfig.current,
        })
      : undefined,
  ]
    .filter(isDefined)
    .join("\n");
};
