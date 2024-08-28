import { isDefined } from "@mjtdev/engine";
import { Aipls } from "../aipl/Aipls";
import { AppObjects } from "../app-object/AppObjects";
export const createCardSystemMessage = ({ systemName, title, text = "", aiplContext, }) => {
    if (text.trim().length === 0) {
        return undefined;
    }
    const renderedText = Aipls.renderAiplProgramText(text, aiplContext);
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
//# sourceMappingURL=createCardSystemMessage.js.map