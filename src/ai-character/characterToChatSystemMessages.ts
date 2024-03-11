import { isDefined } from "@mjtdev/engine";
import { DEFAULT_MES_EXAMPLE } from "../ai/prompt/DEFAULT_MES_EXAMPLE";
import { Prompts } from "../ai/prompt/Prompts";
import { textToChatMessageExampleText } from "../ai/prompt/textToChatMessageExampleText";
import { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import {
  AppCharacter,
  AppCharacterFieldName,
} from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { AI_FUNCTION_PREFIX } from "../ai-function/AI_FUNCTION_TOKEN";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "../chat/DEFAULT_CHAT_MESSAGE_TEMPLATE";
import { ChatMessageTemplate } from "../chat/ChatMessageTemplate";
import { AiplContext } from "../aipl/runtime/AiplContext";

const trimSmallTextToUndefined = (text: string | undefined) => {
  if (!text) {
    return undefined;
  }
  return text.trim().length < 10 ? undefined : text;
};

export const characterToChatSystemMessages = ({
  systemName,
  character,
  fieldNameToAiplContext,
  // aiplContext,
  // facts,
  aiFunctions = [],
  messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE,
}: {
  systemName: string;
  character: AppCharacter;
  aiFunctions: AiFunctionDescription[];
  fieldNameToAiplContext: (filedName: AppCharacterFieldName) => AiplContext;

  // aiplContext: AiplContext;
  // facts: {
  //   char: string | undefined;
  //   user: string | undefined;
  // };
  messageTemplate?: ChatMessageTemplate;
}): ChatMessage[] => {
  const { messageStart, messageEnd, afterCharPostfix } = messageTemplate;

  const cardMessageExample = trimSmallTextToUndefined(
    character.card.data.mes_example
  );
  // ??  DEFAULT_MES_EXAMPLE;
  const functionMessageExample = aiFunctions
    .map((func) =>
      Prompts.renderTemplateText(
        Prompts.textToChatMessageExampleText({
          text: func.messageExample,
          startChatLinePrefix: messageStart,
          afterCharPostfix,
          endChatLinePostfix: messageEnd,
        }),
        {
          functionName: `${AI_FUNCTION_PREFIX}${func.name}`,
        }
      )
    )
    .filter(isDefined)
    .join("\n");

  return [
    createCardSystemMessage({
      // cardFieldName: "description",
      systemName,
      title: "{char} Description",
      text: character.card.data.description,
      aiplContext: fieldNameToAiplContext("description"),
      // facts,
    }),
    createCardSystemMessage({
      // cardFieldName: "personality",
      systemName,
      title: "{char} Personality",
      text: character.card.data.personality,
      // aiplContext,
      aiplContext: fieldNameToAiplContext("personality"),
      // facts,
    }),

    createCardSystemMessage({
      // cardFieldName: "mes_example",
      systemName,
      title: "Examples of what {char} talks like:",
      text: textToChatMessageExampleText({
        text: [cardMessageExample, functionMessageExample]
          .filter(isDefined)
          .join("\n"),
        afterCharPostfix,

        endChatLinePostfix: messageEnd,
        startChatLinePrefix: messageStart,
      }),
      aiplContext: fieldNameToAiplContext("mes_example"),
      // aiplContext,
      // facts,
    }),
    createCardSystemMessage({
      // cardFieldName: "system_prompt",
      systemName,
      text: character.card.data.system_prompt,
      // aiplContext,
      aiplContext: fieldNameToAiplContext("system_prompt"),
      // facts,
    }),
    createCardSystemMessage({
      // cardFieldName: "scenario",
      systemName,
      title: "Scenerio",
      text: character.card.data.scenario,
      // aiplContext,
      aiplContext: fieldNameToAiplContext("scenario"),
      // facts,
    }),
  ].filter(isDefined);
};
