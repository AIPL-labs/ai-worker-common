import { isDefined } from "@mjtdev/engine";
export const chatMessagesToPromptTextsChatML = ({ messages, characters, }) => {
    const messageStart = "<|im_start|>";
    const messageEnd = "<|im_end|>";
    return messages
        .filter((message) => {
        if (message.content.type !== "text") {
            return false;
        }
        return true;
    })
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const text = message.content.type === "text"
            ? message.content.parts.join("").trim()
            : "";
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