import { isDefined } from "@mjtdev/engine";
import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "./DEFAULT_CHAT_MESSAGE_TEMPLATE";
import { chatMessageToText } from "./chatMessageToText";
export const chatMessagesToPromptTextsChatML = ({ messages, characters, 
// facts = {},
// aiplContext,
messageTemplate = DEFAULT_CHAT_MESSAGE_TEMPLATE, }) => {
    const { messageStart, afterCharPostfix, messageEnd } = messageTemplate;
    // const aiplState = {
    //   assistant: aiCharacter?.card.data.name,
    //   user: userCharacter?.card.data.name,
    //   char: character.card.data.name,
    //   ...facts,
    // };
    return messages
        .map((message, i) => {
        const characterName = characters[message.characterId ?? ""]?.card.data.name;
        const author = characterName ?? message.role;
        const rawText = chatMessageToText(message);
        // const updatedState = { ...aiplContext.state, char: characterName };
        // const renderedText =
        //   message.role === "system"
        //     ? // ? Prompts.renderTemplateText(rawText, facts)
        //       renderAiplProgramText(rawText, {
        //         ...aiplContext,
        //         state: updatedState,
        //       })
        //     : rawText;
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
//# sourceMappingURL=chatMessagesToPromptTextsChatML.js.map