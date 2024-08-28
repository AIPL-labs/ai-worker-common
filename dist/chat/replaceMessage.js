"use strict";
// import { Asserts, Objects } from "@mjtdev/engine";
// import { ChatMessage } from "../type/chat-message/ChatMessage";
// import { Chat } from "../type/chat/Chat";
// import { DataIndexesStates } from "../state/data-index/DataIndexesStates";
// import { updateChat } from "./updateChat";
// export const replaceMessage = async ({
//   targetId, srcId, chat, userId,
// }: {
//   chat: Chat;
//   userId: string;
//   targetId: string;
//   srcId: string;
// }) => {
//   const idx = DataIndexesStates.getDataIndexState<ChatMessage>(
//     chat.messageIdxId
//   );
//   if (!idx) {
//     throw new Error("no existing messageIdx");
//   }
//   await DataIndexesStates.updateDataIndexState<ChatMessage>(
//     chat.messageIdxId,
//     (idx) => {
//       const { records: messages } = idx;
//       const targetMessage = messages[targetId];
//       const srcMessage = messages[srcId];
//       Asserts.assertValue(targetMessage);
//       Asserts.assertValue(srcMessage);
//       const children = Objects.values(messages).filter(
//         (m) => m.parent === targetId
//       );
//       children.forEach((c) => (c.parent = srcId));
//     }
//   );
//   if (chat.currentMessageId === targetId) {
//     await updateChat({
//       chatId: chat.id,
//       userId,
//       updater: (c) => {
//         c.currentMessageId = srcId;
//       },
//     });
//   }
// };
//# sourceMappingURL=replaceMessage.js.map