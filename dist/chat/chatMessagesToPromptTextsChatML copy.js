import { isDefined } from "@mjtdev/engine";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "./DEFAULT_CHAT_MESSAGE_TEMPLATE";
import { chatMessageToText } from "./chatMessageToText";
export const chatMessagesToPromptTextsChatML = ({ messages, characters, messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE, }) => {
    const { messageStart, afterCharPostfix, messageEnd } = messageTemplate;
    return messages
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const rawText = chatMessageToText(message);
        const renderedText = rawText;
        if (i === messages.length - 1) {
            return {
                role: message.role,
                content: `${messageStart}${author}${afterCharPostfix}${renderedText}`,
            };
        }
        return {
            role: message.role,
            content: `${messageStart}${author}${afterCharPostfix}${renderedText}${messageEnd}`,
        };
    })
        .filter(isDefined);
};
//# sourceMappingURL=chatMessagesToPromptTextsChatML%20copy.js.map