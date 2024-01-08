"use strict";
// import { Objects } from "@mjtdev/engine";
// import { Apps } from "../app/Apps";
// import { Chats } from "../chat/Chats";
// import { Chat } from "../type/chat/Chat";
// // import { addDirecitonToChat } from "./addDirecitonToChat";
// import { addFunctionsToChat } from "../ai-function/addFunctionsToChat";
// import { addRagToChat } from "./addRagToChat";
// import { addStreamingChatMessage } from "./addStreamingChatMessage";
// import { askRestfulAiCompletionsStream } from "./askRestfulAiCompletionsStream";
// import { getAiChatPrompt } from "./getAiChatPrompt";
// export const generateAiText = async ({
//   chat,
//   userId,
//   baseUrl,
//   authToken,
//   model,
//   signal,
// }: {
//   model?: string;
//   signal?: AbortSignal;
//   baseUrl?: string;
//   authToken?: string;
//   chat: Chat;
//   userId: string;
// }) => {
//   const consumer = await addStreamingChatMessage({
//     chat,
//     draft: {
//       role: "assistant",
//       name: chat.aiName,
//     },
//     userId,
//   });
//   const messages = Chats.getChatMessages(chat);
//   const chatBuilder = Chats.createChatBuilder({
//     chat,
//     messages: Objects.values(messages),
//   });
//   const aiPrePromptMessage = Chats.getChatMessage(chat, chat.currentMessageId);
//   if (!aiPrePromptMessage) {
//     throw new Error("No AI prePrompt message");
//   }
//   const userQueryMessage = Chats.getChatMessage(
//     chat,
//     aiPrePromptMessage.parent
//   );
//   if (!userQueryMessage) {
//     throw new Error("No user query message");
//   }
//   await addRagToChat({ chatBuilder });
//   // TBD Directions to Chat
//   // addDirecitonToChat({ chatBuilder });
//   addFunctionsToChat({ chatBuilder });
//   const { chat: builtChat, messages: builtMessages } = chatBuilder.get();
//   const prompt = getAiChatPrompt({
//     chat: builtChat,
//     messages: builtMessages,
//   });
//   console.log(prompt);
//   // return Apps.waitFor(
//   //   () =>
//   //     askRestfulAiCompletionsStream({
//   //       authToken,
//   //       baseUrl,
//   //       signal,
//   //       consumer,
//   //       completionsRequest: {
//   //         prompt,
//   //         model,
//   //         max_tokens: chat.maxResponseTokens,
//   //         stop: chat.stop,
//   //       },
//   //       onDone: () => {
//   //         // AppEvents.dispatchEvent("finished-generation");
//   //       },
//   //     }),
//   //   {
//   //     message: "generating...",
//   //   }
//   // );
// };
//# sourceMappingURL=generateAiText.js.map