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
  aiplContext: AiplContext;
}) => {
  if (text.trim().length === 0) {
    return undefined;
  }
  const fullText = [title ? `# ${title}:` : undefined, text]
    .filter(isDefined)
    .join("\n");

  const renderedText = Aipls.renderAiplProgramText(fullText, aiplContext);

  const ms = AppObjects.create("chat-message", {
    role: "system",
    name: systemName,
    content: {
      type: "text",
      parts: [renderedText].filter(isDefined),
    },
  });
  return ms;
};
