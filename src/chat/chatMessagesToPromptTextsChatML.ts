import { isDefined } from "@mjtdev/engine";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { AppCharacter } from "../type/app-character/AppCharacter";

export type PromptText = {
  text: string;
  role: "user" | "system" | "assistant";
};

export const chatMessagesToPromptTextsChatML = ({
  messages,
  characters,
}: {
  characters: Record<string, AppCharacter | undefined>;
  messages: ChatMessage[];
}): PromptText[] => {
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
      const characterName =
        characters[message.characterId ?? ""]?.card.data.name;
      const author = characterName ?? message.role;
      const text =
        message.content.type === "text"
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
