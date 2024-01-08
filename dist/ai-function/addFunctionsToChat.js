"use strict";
// import { isNotEmpty } from "@mjtdev/engine";
// import { Chats } from "../chat/Chats";
// import { ChatBuilder } from "../chat/createChatBuilder";
// import { insertChatMessage } from "../chat/insertChatMessage";
// import { listChatMessages } from "../chat/listChatMessages";
// import { createAiFunctionPromptText } from "./createAiFunctionPromptText";
// export const addFunctionsToChat = ({
//   chatBuilder,
// }: {
//   chatBuilder: ChatBuilder;
// }) => {
//   const { chat, messages } = chatBuilder.get();
//   const aiPrePromptMessage = Chats.getChatMessage(chat, chat.currentMessageId);
//   if (!aiPrePromptMessage) {
//     throw new Error("No AI prePrompt message");
//   }
//   const orderedMessages = listChatMessages({
//     messages,
//     messageId: chat.currentMessageId,
//   });
//   const topMessage = orderedMessages[0];
//   const functionPrompt = createAiFunctionPromptText(chat);
//   if (isNotEmpty(functionPrompt)) {
//     chatBuilder.update((chat, messages) =>
//       insertChatMessage({
//         chat,
//         messages,
//         parent: topMessage.id,
//         // parent: undefined,
//         draftMessage: {
//           role: "system",
//           content: {
//             type: "text",
//             parts: [functionPrompt],
//           },
//         },
//       })
//     );
//   }
// };
//# sourceMappingURL=addFunctionsToChat.js.map