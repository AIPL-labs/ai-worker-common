import { isDefined } from "@mjtdev/engine";
import { AppObjects } from "../app-object/AppObjects";
import { renderCardText } from "./renderCardText";
export const createCardSystemMessage = ({ systemName: systemName, title, text = "", facts, }) => {
    if (text.trim().length === 0) {
        return undefined;
    }
    const renderedTitle = renderCardText(title, facts);
    const ms = AppObjects.create("chat-message", {
        role: "system",
        name: systemName,
        content: {
            type: "text",
            parts: [
                renderedTitle ? `# ${renderedTitle}:\n` : undefined,
                renderCardText(text, facts),
            ].filter(isDefined),
        },
    });
    return ms;
};
//# sourceMappingURL=createCardSystemMessage.js.map