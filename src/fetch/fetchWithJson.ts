import type { FetchOptions } from "./FetchOptions";
import { HomeAuth } from "./data/HomeAuth";
import { fetchWithAuth } from "./fetchWithAuth";

export const fetchWithJson = async <T extends object = object>({
  authToken,
  url,
  data,
  options = {},
}: {
  authToken?: string;
  url: string;
  data?: T | string;
  options?: Partial<FetchOptions>;
}) => {
  const { method = "POST", headers = {} } = options;

  const body: string = typeof data === "string" ? data : JSON.stringify(data);

  return fetchWithAuth({
    authToken,
    url,
    data: body,
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
