import { isDefined } from "@mjtdev/engine";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { DEFAULT_MES_EXAMPLE } from "./DEFAULT_MES_EXAMPLE";

export const trimSmallTextToUndefined = (text: string | undefined) => {
  if (!text) {
    return undefined;
  }
  return text.trim().length < 10 ? undefined : text;
};

export const characterToChatSystemMessages = ({
  systemName,
  character,
  facts,
  options = {},
}: {
  systemName: string;
  character: AppCharacter;
  facts: {
    char: string | undefined;
    user: string | undefined;
  };
  options?: Partial<{
    startChatLinePrefix: string;
    afterCharPostfix: string;
    endChatLinePostfix: string;
  }>;
}): ChatMessage[] => {
  const {
    startChatLinePrefix = "<|im_start|>",
    afterCharPostfix = "\n",
    endChatLinePostfix = "<|im_end|>",
  } = options;
  return [
    createCardSystemMessage({
      systemName,
      title: "{{char}} Description",
      text: character.card.data.description,
      facts,
    }),
    createCardSystemMessage({
      systemName,
      title: "{{char}} Personality",
      text: character.card.data.personality,
      facts,
    }),
    createCardSystemMessage({
      systemName,
      title: "Examples of what {{char}} talks like:",
      text: (
        trimSmallTextToUndefined(character.card.data.mes_example) ??
        DEFAULT_MES_EXAMPLE
      )
        // ? character.card.data.mes_example
        // .replaceAll(":", "")
        // .replaceAll(/<[^>]*>/g, "\n")
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
        .join("\n"),
      // : undefined,
      facts,
    }),
    createCardSystemMessage({
      systemName,
      text: character.card.data.system_prompt,
      facts,
    }),
    createCardSystemMessage({
      systemName,
      title: "Scenerio",
      text: character.card.data.scenario,
      facts,
    }),
  ].filter(isDefined);
};
