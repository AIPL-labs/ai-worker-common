import { isDefined } from "@mjtdev/engine";
import { authTokenToAuthHeader } from "../common/authTokenToAuthHeader";
import { orError } from "../common/orError";
import { FetchOptions } from "./FetchOptions";

export const fetchWithAuth = async <T extends BodyInit = BodyInit>({
  url,
  data,
  options = {},
  authToken,
}: {
  authToken?: string;
  url: string;
  data?: T | string;
  options?: FetchOptions;
}) => {
  const { headers = {}, signal } = options;
  const authHeaders = authToken ? authTokenToAuthHeader(authToken) : {};
  if (options.signal?.aborted) {
    return new Response(`Fetch already aborted, refusing to fetch: ${url}`, {
      status: 499,
    });
  }
  const resp = await orError(() =>
    fetch(url, {
      signal,
      ...options,
      headers: {
        ...authHeaders,
        ...headers,
      },
      body: data,
    })
  );
  if (resp instanceof Error) {
    throw new Error(
      [`fetch failed for: ${url}`, resp.message].filter(isDefined).join("\n"),

      {
        cause: resp,
      }
    );
    // return new Response(
    //   [
    //     `fetch failed for: ${url}`,
    //     resp.message,
    //     new Error().stack,
    //     resp.cause,
    //     resp.name,
    //   ]
    //     .filter(isDefined)
    //     .join("\n"),
    //   {
    //     status: 555,
    //   }
    // );
  }
  return resp;
};
