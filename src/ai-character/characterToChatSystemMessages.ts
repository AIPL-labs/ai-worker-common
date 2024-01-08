import { isDefined } from "@mjtdev/engine";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";

export const characterToChatSystemMessages = ({
  systemName,
  character,
  facts,
}: {
  systemName: string;
  character: AppCharacter;
  facts: {
    char: string | undefined;
    user: string | undefined;
  };
}): ChatMessage[] => {
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
      title: "Message Examples",
      text: character.card.data.mes_example,
      facts,
    }),
    createCardSystemMessage({
      systemName,
      title: "Context",
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
