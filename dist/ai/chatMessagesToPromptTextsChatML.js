import { isDefined } from "@mjtdev/engine";
export const chatMessagesToPromptTextsChatML = (messages) => {
    const messageStart = "<|im_start|>";
    const messageEnd = "<|im_end|>";
    return messages
        .map((message, i) => {
        const author = message.name ?? message.role;
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