import { isDefined, Objects } from "@mjtdev/engine";
import { DEFAULT_MES_EXAMPLE } from "../ai/prompt/DEFAULT_MES_EXAMPLE";
import { Prompts } from "../ai/prompt/Prompts";
import { textToChatMessageExampleText } from "../ai/prompt/textToChatMessageExampleText";
import type { AiFunctionDescription } from "../type/ai-function/AiFunctions";
import type {
  AppCharacter,
  AppCharacterFieldName,
  FormSkillConfig,
  ToolConfig,
} from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { AI_FUNCTION_PREFIX } from "../ai-function/AI_FUNCTION_TOKEN";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "../chat/DEFAULT_CHAT_MESSAGE_TEMPLATE";
import type { ChatMessageTemplate } from "../chat/ChatMessageTemplate";
import type { AiplContext } from "../aipl/runtime/AiplContext";
import { formConfigToSystemMessage } from "./formConfigToSystemMessage";
import { AppObjects } from "../app-object/AppObjects";
import { toolConfigCurrentToSystemMessage } from "./toolConfigCurrentToSystemMessage";

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
  aiFunctions = [],
  messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE,
  toolConfigCurrent,
  typeName,
}: {
  systemName: string;
  character: AppCharacter;
  aiFunctions: AiFunctionDescription[];
  fieldNameToAiplContext: (filedName: AppCharacterFieldName) => AiplContext;
  messageTemplate?: ChatMessageTemplate;
  typeName?: string;
  toolConfigCurrent?: ToolConfig["current"];
}): ChatMessage[] => {
  const { messageStart, messageEnd, afterCharPostfix } = messageTemplate;

  const cardMessageExample = trimSmallTextToUndefined(
    character.card.data.mes_example
  );
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

  const formSkillConfigEntries = Objects.entries(
    character.card.data.extensions?.formSkillConfigs ?? {}
  );

  return [
    formSkillConfigEntries.length > 0
      ? AppObjects.create("chat-message", {
          role: "system",
          name: systemName,
          content: {
            type: "text",
            parts: [
              formSkillConfigEntries
                .map(([key, value]) => {
                  return formConfigToSystemMessage(key, value);
                })
                .join("\n"),
            ].filter(isDefined),
          },
        })
      : undefined,

    createCardSystemMessage({
      systemName,
      title: "{char} Description",
      text: character.card.data.description,
      aiplContext: fieldNameToAiplContext("description"),
    }),
    createCardSystemMessage({
      systemName,
      title: "{char} Personality",
      text: character.card.data.personality,
      aiplContext: fieldNameToAiplContext("personality"),
    }),

    createCardSystemMessage({
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
    }),
    createCardSystemMessage({
      systemName: systemName,
      text: character.card.data.system_prompt,
      aiplContext: fieldNameToAiplContext("system_prompt"),
    }),
    createCardSystemMessage({
      systemName,
      title: "Scenerio",
      text: character.card.data.scenario,
      aiplContext: fieldNameToAiplContext("scenario"),
    }),
    createCardSystemMessage({
      systemName,
      text: toolConfigCurrentToSystemMessage({
        typeName,
        currentObject: toolConfigCurrent,
      }),
    }),
  ].filter(isDefined);
};
