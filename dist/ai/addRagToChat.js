// import { getChatMessage } from "../ui/chat/getChatMessage";
// import { ChatBuilder } from "./createChatBuilder";
// import { insertChatMessage } from "./insertChatMessage";
// import { getRagMessageText } from "./rag/getRagMessageText";
import { Chats } from "../chat/Chats";
export const addRagToChat = async ({ chatBuilder, }) => {
    const { chat } = chatBuilder.get();
    const { vectorStoreIds = [] } = chat;
    const aiPrePromptMessage = Chats.getChatMessage(chat, chat.currentMessageId);
    if (!aiPrePromptMessage) {
        throw new Error("No AI prePrompt message");
    }
    const userQueryMessage = Chats.getChatMessage(chat, aiPrePromptMessage.parent);
    if (!userQueryMessage) {
        throw new Error("No user query message");
    }
    // const ragText = await getRagMessageText({
    //   vectorStoreIds,
    //   query: userQueryMessage.content.parts[0],
    // });
    // TODO RAG
    const ragText = undefined;
    if (ragText) {
        chatBuilder.update((chat, messages) => Chats.insertChatMessage({
            chat,
            messages,
            parent: userQueryMessage?.parent,
            draftMessage: {
                role: "system",
                content: {
                    type: "text",
                    parts: [ragText],
                },
            },
        }));
    }
};
//# sourceMappingURL=addRagToChat.js.map