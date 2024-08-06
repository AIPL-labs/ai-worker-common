import { isDefined } from "@mjtdev/engine";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import type { ChatMessageTemplate } from "./ChatMessageTemplate";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "./DEFAULT_CHAT_MESSAGE_TEMPLATE";
import type { PromptText } from "./PromptText";
import { chatMessageToText } from "./chatMessageToText";

export const chatMessagesToPromptTextsChatML = ({
  messages,
  characters = {},
  messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE,
}: {
  characters?: Record<string, AppCharacter | undefined>;
  messages: ChatMessage[];
  messageTemplate?: ChatMessageTemplate;
}): PromptText[] => {
  const { messageStart, afterCharPostfix, messageEnd } = messageTemplate;
  return messages
    .map((message, i) => {
      const characterName =
        characters[message.characterId ?? ""]?.card.data.name;
      const author = characterName ?? message.role;
      const rawText = chatMessageToText(message);
      const renderedText = rawText;

      if (i === messages.length - 1) {
        return {
          role: message.role,
          text: `${messageStart}${author}${afterCharPostfix}${renderedText}`,
        };
      }
      return {
        role: message.role,
        text: `${messageStart}${author}${afterCharPostfix}${renderedText}${messageEnd}`,
      };
    })
    .filter(isDefined);
};
