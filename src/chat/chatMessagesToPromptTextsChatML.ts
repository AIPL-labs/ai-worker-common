import { isDefined } from "@mjtdev/engine";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { chatMessageToText } from "./chatMessageToText";

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
    .map((message, i) => {
      const characterName =
        characters[message.characterId ?? ""]?.card.data.name;
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
