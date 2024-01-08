"use strict";
// import { ChatMessage } from "../type/chat-message/ChatMessage";
// import { ChatRole } from "../type/chat-message/ChatRole";
// import { Chat } from "../type/chat/Chat";
// import { Chats } from "./Chats";
// export const addChatText = async (params: {
//   userId: string;
//   chat: Chat;
//   text: string;
//   name?: string;
//   characterId?: string;
//   role?: ChatRole;
// }): Promise<ChatMessage> => {
//   const { chat, role = "user", userId } = params;
//   const {
//     text,
//     characterId = chat.userCharacterId,
//     name = chat.userName,
//   } = params;
//   return Chats.addChatMessage({
//     chat,
//     userId,
//     draft: {
//       name,
//       role,
//       characterId,
//       content: {
//         type: "text",
//         parts: [text],
//       },
//     },
//   });
// };
//# sourceMappingURL=addChatText.js.map