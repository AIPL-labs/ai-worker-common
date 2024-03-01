export const textToChatMessageExampleText = ({
  text,
  startChatLinePrefix,
  afterCharPostfix,
  endChatLinePostfix,
}: {
  text?: string;
  startChatLinePrefix: string;
  afterCharPostfix: string;
  endChatLinePostfix: string;
}) => {
  if (!text) {
    return undefined;
  }
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
