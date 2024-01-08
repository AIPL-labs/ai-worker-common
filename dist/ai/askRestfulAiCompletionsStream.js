"use strict";
// import {
//   CLOUDFLARE_AI_DONE_CHUNK,
//   OpenAiCompletionsRequest,
//   OpenAiTextResponse,
//   Parsers,
//   lock,
//   safe,
// } from "@mjtdev/engine";
// import { Apps } from "../app/Apps";
// import { fetchWithJson } from "../fetch/fetchWithJson";
// import { AI_LOCK } from "./AI_LOCK";
// export const askRestfulAiCompletionsStream = async ({
//   baseUrl,
//   authToken,
//   consumer,
//   completionsRequest = {},
//   signal,
//   onDone = () => {},
// }: {
//   signal?: AbortSignal;
//   baseUrl?: string;
//   authToken?: string;
//   onDone?: () => void;
//   consumer: (
//     value: OpenAiTextResponse | undefined,
//     done: boolean
//   ) => boolean | undefined | void;
//   completionsRequest?: Partial<OpenAiCompletionsRequest>;
// }): Promise<Response | undefined> => {
//   const data: Partial<OpenAiCompletionsRequest> = {
//     ...completionsRequest,
//     stream: true,
//   };
//   const response = await lock(
//     () =>
//       fetchWithJson(`${baseUrl}/v1/completions`, data, {
//         authToken,
//         signal,
//       }),
//     {
//       name: AI_LOCK,
//     }
//   );
//   if (!response.ok) {
//     const text = await response.text();
//     Apps.error(
//       `Error fetching AI: ${response.statusText}: ${response.statusText}: ${text}`
//     );
//     consumer(undefined, true);
//     return response;
//   }
//   const stream = new TextDecoderStream();
//   if (!response.body) {
//     Apps.error(
//       `Error asking AI (no body): ${response.statusText}: ${response.statusText}`
//     );
//     return response;
//   }
//   const pipe = response.body.pipeThrough(stream);
//   const reader = pipe.getReader();
//   // const abortListenerDisposer = AppEvents.addEventListener(
//   //   "abort-generation",
//   //   () => {
//   //     safe(() => reader.cancel());
//   //     abortListenerDisposer();
//   //   }
//   // );
//   // const buffer: string[] = [];
//   const dataParser = (data: string) => {
//     if (!data) {
//       return;
//     }
//     if (data === CLOUDFLARE_AI_DONE_CHUNK) {
//       return true;
//     }
//     // buffer.push(data);
//     // const parsed = safe(() => JSON.parse(buffer.join("")));
//     const parsed = safe(() => JSON.parse(data));
//     if (!parsed) {
//       return;
//     }
//     // buffer.length = 0;
//     return parsed;
//   };
//   Parsers.createSseParser({
//     signal,
//     consumer,
//     reader,
//     onDone: () => {
//       onDone();
//       // abortListenerDisposer();
//     },
//     dataParser,
//   });
//   return response;
// };
//# sourceMappingURL=askRestfulAiCompletionsStream.js.map