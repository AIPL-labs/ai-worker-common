import { isDefined } from "@mjtdev/engine";
import { DEFAULT_MES_EXAMPLE } from "../ai/prompt/DEFAULT_MES_EXAMPLE";
import { Prompts } from "../ai/prompt/Prompts";
import { textToChatMessageExampleText } from "../ai/prompt/textToChatMessageExampleText";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { AI_FUNCTION_PREFIX } from "../ai-function/AI_FUNCTION_TOKEN";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "../chat/DEFAULT_CHAT_MESSAGE_TEMPLATE";
const trimSmallTextToUndefined = (text) => {
    if (!text) {
        return undefined;
    }
    return text.trim().length < 10 ? undefined : text;
};
export const characterToChatSystemMessages = ({ systemName, character, facts, aiFunctions = [], messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE, }) => {
    const { 
    // CHATML
    // startChatLinePrefix = "<|im_start|>",
    // afterCharPostfix = "\n",
    // endChatLinePostfix = "<|im_end|>",
    // openchat
    messageStart, messageEnd, 
    // startChatLinePrefix,
    afterCharPostfix,
    // endChatLinePostfix,
     } = messageTemplate;
    const cardMessageExample = trimSmallTextToUndefined(character.card.data.mes_example) ??
        DEFAULT_MES_EXAMPLE;
    const functionMessageExample = aiFunctions
        .map((func) => Prompts.renderTemplateText(Prompts.textToChatMessageExampleText({
        text: func.messageExample,
        startChatLinePrefix: messageStart,
        afterCharPostfix,
        endChatLinePostfix: messageEnd,
    }), {
        functionName: `${AI_FUNCTION_PREFIX}${func.name}`,
    }))
        .filter(isDefined)
        .join("\n");
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
            text: textToChatMessageExampleText({
                text: [cardMessageExample, functionMessageExample].join("\n"),
                afterCharPostfix,
                endChatLinePostfix: messageEnd,
                startChatLinePrefix: messageStart,
            }),
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
//# sourceMappingURL=characterToChatSystemMessages.js.map