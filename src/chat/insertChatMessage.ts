// // import { Chat } from "./Chat";
// // import { ChatMessage } from "./ChatMessage";
// // import { findChatMessages } from "./findChatMessages";

// import { createChatMessage } from "../chat-message/createChatMessage";
// import { ChatMessage } from "../type/chat-message/ChatMessage";
// import { Chat } from "../type/chat/Chat";

// export const insertChatMessage = ({
//   chat,
//   messages,
//   draftMessage,
//   parent = chat.currentMessageId,
// }: {
//   parent?: string;
//   chat: Chat;
//   messages: ChatMessage[];
//   draftMessage: Partial<ChatMessage>;
// }): { chat: Chat; messages: ChatMessage[]; message: ChatMessage } => {
//   const { id } = chat;
//   const message = createChatMessage({
//     ...draftMessage,
//     chatId: id,
//     parent,
//   });

//   const parentMessageIdx = messages.findIndex((m) => m.id === parent);
//   const parentMessage = messages[parentMessageIdx];
//   if (!parentMessage) {
//     throw new Error(`No message for parent: ${parent}`);
//   }
//   // const updated
//   const updatedMessages = messages.map((m) => {
//     if (m.parent === parent) {
//       return { ...m, parent: message.id };
//     }
//     return m;
//   });

//   throw new Error("TBD insertChatMessage");

//   // return {
//   //   chat: {
//   //     ...chat,
//   //     currentMessageId:
//   //       chat.currentMessageId === parent ? message.id : chat.currentMessageId,
//   //     modification: Date.now(),
//   //     messageIds: [...chat.messageIds, message.id],
//   //   },
//   //   message,
//   //   messages: [...updatedMessages, message],
//   // };
// };
