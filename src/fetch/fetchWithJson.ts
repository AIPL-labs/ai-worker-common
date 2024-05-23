import type { FetchOptions } from "./FetchOptions";
import type { FetchRetryOptions } from "./FetchRetryOptions";
import { fetchWithAuth } from "./fetchWithAuth";

export const fetchWithJson = async <T extends object = object>({
  authToken,
  url,
  data,
  options = {},
  retryOptions,
}: {
  authToken?: string;
  url: string;
  data?: T | string;
  options?: Partial<FetchOptions>;
  retryOptions?: FetchRetryOptions;
}) => {
  const { method = "POST", headers = {} } = options;

  const body: string = typeof data === "string" ? data : JSON.stringify(data);

  return fetchWithAuth({
    authToken,
    url,
    data: body,
    retryOptions,
    options: {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      method,
    },
  });
};
