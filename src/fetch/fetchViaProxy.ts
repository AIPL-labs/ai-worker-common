import type { FetchRetryOptions } from "./FetchRetryOptions";
import type { HomeAuth } from "./data/HomeAuth";
import { fetchWithAuth } from "./fetchWithAuth";

export const fetchViaProxy = async ({
  url,
  homeBaseUrl,
  authToken,
  retryOptions,
}: HomeAuth & {
  url: string;

  retryOptions?: FetchRetryOptions;
}) => {
  return fetchWithAuth({
    authToken,
    retryOptions,
    url: `${homeBaseUrl}/proxy`,
    options: {
      headers: {
        "X-SERVICE": "proxy",
        "X-PROXY": url,
      },
    },
  });
};
