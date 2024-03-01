export const textToChatMessageExampleText = ({ text, startChatLinePrefix, afterCharPostfix, endChatLinePostfix, }) => {
    return text
        .split("\n")
        .map((line) => {
        if (!line.includes(":")) {
            return line;
        }
        const [char, ...rest] = line.trim().split(":");
        return `${startChatLinePrefix}${char}${afterCharPostfix}${rest
            .join(":")
            .trim()}${endChatLinePostfix}`;
    })
        .join("\n");
};
//# sourceMappingURL=textToChatMessageExampleText.js.map