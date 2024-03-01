import { isDefined } from "@mjtdev/engine";
import { AppCharacter } from "../type/app-character/AppCharacter";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { chatMessageToText } from "./chatMessageToText";
import { AiCharacters } from "../ai-character/AiCharacters";

export type PromptText = {
  text: string;
  role: "user" | "system" | "assistant";
};

export type ChatMessageTemplate = {
  messageStart: string;
  messageEnd: string;
  afterCharPostfix: string;
};

export const CHAT_ML_TEMPLATE: ChatMessageTemplate = {
  messageStart: "<|im_start|>",
  messageEnd: "<|im_end|>",
  afterCharPostfix: "\n",
};

export const OPENCHAT_TEMPLATE: ChatMessageTemplate = {
  messageStart: "GPT4 Correct ",
  afterCharPostfix: ": ",
  messageEnd: "<|end_of_turn|>",
};
// export const OPENCHAT_TEMPLATE: ChatMessageTemplate = {
//   messageStart: "<|im_start|>",
//   afterCharPostfix: "\n",
//   messageEnd: "<|end_of_turn|>",
// };
export const PLAY_TEMPLATE: ChatMessageTemplate = {
  // messageStart: "<|im_start|>",
  // messageStart: "[INST]",
  messageStart: "📩",
  // messageStart: "",
  // messageStart: "🟢",
  // messageStart: "💬",
  // messageStart: "✉️",
  afterCharPostfix: "\n",
  // afterCharPostfix: ": ",
  // messageEnd: "<|end_of_turn|>",
  // messageEnd: "<|/s|>",
  // messageEnd: "<|end_of_turn|>",
  // messageEnd: "</s>",
  // messageEnd: "[/INST]",
  // messageEnd: "<|end_of_turn|>",
  messageEnd: "🛑",
};

const CHAT_GLM3_TEMPlATE: ChatMessageTemplate = {
  messageStart: "<|",
  afterCharPostfix: "|>",
  messageEnd: "",
};
const CHAT_GLM3_MOD_TEMPlATE: ChatMessageTemplate = {
  ...CHAT_GLM3_TEMPlATE,
  messageEnd: "<|end_of_turn|>",
};

export const DEFAULT_CHAT_MESSAGE_TEMPLATE = CHAT_ML_TEMPLATE;
// export const DEFAULT_CHAT_MESSAGE_TEMPLATE = OPENCHAT_TEMPLATE;
// export const DEFAULT_CHAT_MESSAGE_TEMPLATE = PLAY_TEMPLATE;
// export const DEFAULT_CHAT_MESSAGE_TEMPLATE = CHAT_GLM3_MOD_TEMPlATE;

export const chatMessagesToPromptTextsChatML = ({
  messages,
  characters,
  facts = {},
  messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE,
}: {
  characters: Record<string, AppCharacter | undefined>;
  messages: ChatMessage[];
  facts?: Record<string, string | undefined>;
  messageTemplate?: ChatMessageTemplate;
}): PromptText[] => {
  // const {
  //   messageStart = "<|im_start|>",
  //   messageEnd = "<|im_end|>",
  //   afterCharPostfix = "\n",
  // } = options;
  // const { messageStart = "<|im_start|>", messageEnd = "<|im_end|>" } = options;
  const { messageStart, afterCharPostfix, messageEnd } = messageTemplate;

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
