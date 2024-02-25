import { isDefined } from "@mjtdev/engine";
import { chatMessageToText } from "./chatMessageToText";
import { AiCharacters } from "../ai-character/AiCharacters";
export const chatMessagesToPromptTextsChatML = ({ messages, characters, facts = {}, }) => {
    const messageStart = "<|im_start|>";
    const messageEnd = "<|im_end|>";
    return messages
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const rawText = chatMessageToText(message);
        const renderedText = message.role === "system"
            ? AiCharacters.renderCardText(rawText, facts)
            : rawText;
        if (i === messages.length - 1) {
            return {
                role: message.role,
                text: `${messageStart}${author}\n${renderedText}`,
            };
        }
        return {
            role: message.role,
            text: `${messageStart}${author}\n${renderedText}${messageEnd}`,
        };
    })
        .filter(isDefined);
};
//# sourceMappingURL=chatMessagesToPromptTextsChatML.js.map