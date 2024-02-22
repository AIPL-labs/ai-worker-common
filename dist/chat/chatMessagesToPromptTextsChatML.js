import { isDefined } from "@mjtdev/engine";
import { chatMessageToText } from "./chatMessageToText";
export const chatMessagesToPromptTextsChatML = ({ messages, characters, }) => {
    const messageStart = "<|im_start|>";
    const messageEnd = "<|im_end|>";
    return messages
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const text = chatMessageToText(message);
        if (i === messages.length - 1) {
            return {
                role: message.role,
                text: `${messageStart}${author}\n${text}`,
            };
        }
        return {
            role: message.role,
            text: `${messageStart}${author}\n${text}${messageEnd}`,
        };
    })
        .filter(isDefined);
};
//# sourceMappingURL=chatMessagesToPromptTextsChatML.js.map