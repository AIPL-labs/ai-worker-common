import { characterToChatSystemMessages } from "./characterToChatSystemMessages";
import { DEFAULT_MES_EXAMPLE } from "../ai/prompt/DEFAULT_MES_EXAMPLE";
import { createCardSystemMessage } from "./createCardSystemMessage";
import { createTavernCard } from "./createTavernCard";
import { renderTemplateText } from "../ai/prompt/renderTemplateText";
export const AiCharacters = {
    characterToChatSystemMessages,
    /** @deprecated @see Prompts */
    renderCardText: renderTemplateText,
    createCardSystemMessage,
    createTavernCard,
    DEFAULT_MES_EXAMPLE,
};
//# sourceMappingURL=AiCharacters.js.map