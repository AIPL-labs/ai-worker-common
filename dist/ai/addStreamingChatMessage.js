import { Chats } from "../chat/Chats";
import { createAiResponseMessageUpdaterConsumer } from "./createAiResponseMessageUpdaterConsumer";
export const addStreamingChatMessage = async ({ draft = {}, chat, userId, }) => {
    const message = await Chats.addChatMessage({ chat, userId, draft });
    return createAiResponseMessageUpdaterConsumer({
        chat,
        messageId: message.id,
        stop: chat.stop,
        stopAfter: chat.stopAfter,
    });
};
//# sourceMappingURL=addStreamingChatMessage.js.map