// import {
//   CloudflareAiChunkResponse,
//   OpenAiTextResponse,
//   Parsers,
// } from "@mjtdev/engine";
// import { Chats } from "../chat/Chats";
// import { Chat } from "../type/chat/Chat";
// import { decodeAiResponse } from "./decodeAiResponse";

// export const createAiResponseMessageUpdaterConsumer =
//   ({
//     chat,
//     messageId,
//     stop,
//     stopAfter,
//     buffer = [],
//   }: {
//     chat: Chat;
//     messageId: string;
//     stop: string[];
//     stopAfter: string[];
//     buffer?: string[];
//   }) =>
//   (
//     resp: OpenAiTextResponse | CloudflareAiChunkResponse | undefined,
//     done: boolean
//   ) => {
//     // AppEvents.dispatchEvent("scroll-message-into-view", messageId);
//     if (done) {
//       // AppEvents.dispatchEvent("aiResponseFragment", {
//       //   value: undefined,
//       //   time: Date.now(),
//       // });
//     }
//     const text = decodeAiResponse(resp);
//     if (!text) {
//       // saveChatState();
//       return;
//     }

//     buffer.push(text);
//     const bufferText = buffer.join("");
//     const [fullStoppedTextFragment, fullStopped] = Parsers.detectStop(
//       bufferText,
//       stop
//     );
//     const [afterStoppedTextFragment, afterStopped] = Parsers.detectStopAfter(
//       fullStoppedTextFragment,
//       stopAfter
//     );

//     // AppEvents.dispatchEvent("aiResponseFragment", {
//     //   value: afterStoppedTextFragment,
//     //   time: Date.now(),
//     // });

//     if (afterStoppedTextFragment) {
//       Chats.updateChatMesasgeText({
//         messageId,
//         chat,
//         updater: () => afterStoppedTextFragment,
//       });
//     }
//     if (fullStopped || afterStopped) {
//       // saveChatState();
//       return true;
//     }
//     return false;
//   };
