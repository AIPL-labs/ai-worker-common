import { isDefined } from "@mjtdev/engine";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { chatMessageToText } from "./chatMessageToText";
import { AiCharacters } from "../ai-character/AiCharacters";

export type PromptText = {
  text: string;
  role: "user" | "system" | "assistant";
};

export const chatMessagesToPromptTextsChatML = ({
  messages,
  characters,
  facts = {},
}: {
  characters: Record<string, AppCharacter | undefined>;
  messages: ChatMessage[];
  facts?: Record<string, string | undefined>;
}): PromptText[] => {
  const messageStart = "<|im_start|>";
  const messageEnd = "<|im_end|>";

  return messages
    .map((message, i) => {
      const characterName =
        characters[message.characterId ?? ""]?.card.data.name;
      const author = characterName ?? message.role;
      const rawText = chatMessageToText(message);
      const renderedText =
        message.role === "system"
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
