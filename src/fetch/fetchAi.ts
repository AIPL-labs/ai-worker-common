// import { lock, OpenAiCompletionsRequest } from "@mjtdev/engine";
// import { getFetchState } from "./FetchState";
// import { fetchWithJson } from "./fetchWithJson";

// const AI_LOCK = "AI-LOCK";

// export const fetchAi = async <R>(
//   path: string,
//   data: Partial<OpenAiCompletionsRequest>
// ) => {
//   const { homeBaseUrl } = getFetchState();
//   const fullPath = `${homeBaseUrl}/${path}`;
//   const result = await lock(() => fetchWithJson(fullPath, data), {
//     name: AI_LOCK,
//   });
//   return result;
// };
