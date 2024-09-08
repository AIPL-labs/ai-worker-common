import { isUndefined } from "@mjtdev/engine";
import type { ToolConfig } from "../type/app-character/AppCharacter";

export const toolConfigCurrentToSystemMessage = ({
  typeName = "",
  currentObject,
}: {
  typeName?: string;
  currentObject?: ToolConfig["current"];
}) => {
  if (isUndefined(currentObject)) {
    return undefined;
  }

  return [
    `Current ${typeName} object:`,
    JSON.stringify(currentObject, null, 2),
  ].join("\n");
};
