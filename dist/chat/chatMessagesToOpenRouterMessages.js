import { isDefined, isEmpty } from "@mjtdev/engine";
import { chatMessageToText } from "./chatMessageToText";
export const chatMessagesToOpenRouterMessages = ({ messages, characters = {}, }) => {
    return messages
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const rawText = chatMessageToText(message);
        const renderedText = rawText;
        if (i === messages.length - 1) {
            if (isEmpty(renderedText)) {
                return undefined;
            }
            return {
                role: message.role,
                name: author,
                content: renderedText,
            };
        }
        return {
            role: message.role,
            name: author,
            content: renderedText,
        };
    })
        .filter(isDefined);
};
//# sourceMappingURL=chatMessagesToOpenRouterMessages.js.map