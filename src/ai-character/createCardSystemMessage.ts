import { isDefined } from "@mjtdev/engine";
import { AppObjects } from "../app-object/AppObjects";
import { renderTemplateText } from "../ai/prompt/renderTemplateText";

export const createCardSystemMessage = ({
  systemName: systemName,
  title,
  text = "",
  facts,
}: {
  systemName: string;
  title?: string;
  text?: string;
  facts: Record<string, string | undefined>;
}) => {
  if (text.trim().length === 0) {
    return undefined;
  }
  const renderedTitle = renderTemplateText(title, facts, {
    skipNotFound: true,
  });
  const ms = AppObjects.create("chat-message", {
    role: "system",
    name: systemName,
    content: {
      type: "text",
      parts: [
        renderedTitle ? `# ${renderedTitle}:\n` : undefined,
        renderTemplateText(text, facts, { skipNotFound: true }),
      ].filter(isDefined),
    },
  });
  return ms;
};
