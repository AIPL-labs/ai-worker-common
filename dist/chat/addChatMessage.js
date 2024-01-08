import { AppObjects } from "../app-object/AppObjects";
import { setChatMessage } from "./setChatMessage";
export const addChatMessage = ({ draft, builder, }) => {
    const { chat } = builder.get();
    const { currentMessageId, id } = chat;
    const message = AppObjects.create("chat-message", {
        ...draft,
        // chatId: id,
        parent: currentMessageId,
    });
    if (!message) {
        throw new Error("error creating chat message");
    }
    setChatMessage({ chat, message, builder });
    builder.update((c) => {
        c.currentMessageId = message.id;
        c.modification = Date.now();
    });
    return message;
};
//# sourceMappingURL=addChatMessage.js.map