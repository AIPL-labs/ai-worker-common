import { fetchWithAuth } from "./fetchWithAuth";
import { HomeAuth } from "./data/HomeAuth";

export const fetchViaProxy = async ({
  url,
  homeBaseUrl,
  authToken,
}: HomeAuth & { url: string }) => {
  return fetchWithAuth({
    authToken,
    url: `${homeBaseUrl}/proxy`,
    options: {
      headers: {
        "X-SERVICE": "proxy",
        "X-PROXY": url,
      },
    },
  });
};
