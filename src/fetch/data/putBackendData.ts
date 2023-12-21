import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../../fetch/fetchWithAuth";
import { HttpHeaderMap } from "../../fetch/HttpHeaderMap";
import { getFetchState } from "../FetchState";

export const putBackendData = async (
  id: string,
  data: BodyInit,
  options: Partial<{
    mediaType: string;
    authToken: string;
  }> = {}
) => {
  assertValue(id);
  const { homeBaseUrl } = getFetchState();
  const { mediaType, authToken } = options;
  const headers: HttpHeaderMap | undefined = mediaType
    ? {
        "Content-Type": mediaType,
      }
    : {};
  return await fetchWithAuth(homeBaseUrl + `/data/${id}`, data, {
    method: "PUT",
    authToken,
    headers,
  });
};
