import { isDefined, isEmpty } from "@mjtdev/engine";
import type { OpenRouterMessage } from "../3rd/open-router/OpenRouterTextgenRequest";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import { chatMessageToText } from "./chatMessageToText";

export const chatMessagesToOpenRouterMessages = ({
  messages,
  characters,
}: {
  characters: Record<string, AppCharacter | undefined>;
  messages: ChatMessage[];
}): OpenRouterMessage[] => {
  return messages
    .map((message, i) => {
      const characterName =
        characters[message.characterId ?? ""]?.card.data.name;
      const author = characterName ?? message.role;
      const rawText = chatMessageToText(message);
      const renderedText = rawText;

      if (i === messages.length - 1) {
        if (isEmpty(renderedText)) {
          return undefined;
        }
        return {
          role: message.role,
          name: author,
          content: renderedText,
        };
      }
      return {
        role: message.role,
        name: author,
        content: renderedText,
      };
    })
    .filter(isDefined);
};
