import { isDefined } from "@mjtdev/engine";
import { Aipls } from "../aipl/Aipls";
import type { AiplContext } from "../aipl/runtime/AiplContext";
import { AppObjects } from "../app-object/AppObjects";

export const createCardSystemMessage = ({
  systemName,
  title,
  text = "",
  aiplContext,
}: {
  systemName: string;
  title?: string;
  text?: string;
  aiplContext?: AiplContext;
}) => {
  if (text.trim().length === 0) {
    return undefined;
  }

  const renderedText = isDefined(aiplContext)
    ? Aipls.renderAiplProgramText(text, aiplContext)
    : text;

  const content = [title ? `# ${title}:` : undefined, renderedText]
    .filter(isDefined)
    .join("\n");
  const ms = AppObjects.create("chat-message", {
    role: "system",
    name: systemName,
    content: {
      type: "text",
      parts: [content].filter(isDefined),
    },
  });
  return ms;
};
