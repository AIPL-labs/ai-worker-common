import { assertValue } from "@mjtdev/engine";
import { HttpHeaderMap } from "../HttpHeaderMap";
import { fetchWithAuth } from "../fetchWithAuth";
import { HomeAuth } from "./HomeAuth";

export const putRemoteData = async ({
  authToken,
  homeBaseUrl = "",
  data,
  id,
  options = {},
}: Partial<HomeAuth> & {
  id: string;
  data: BodyInit;
  options?: Partial<{
    mediaType: string;
  }>;
}) => {
  assertValue(id);
  const { mediaType } = options;
  const headers: HttpHeaderMap | undefined = mediaType
    ? {
        "Content-Type": mediaType,
      }
    : {};
  return await fetchWithAuth({
    authToken,
    url: homeBaseUrl + `/data/${id}`,
    data,
    options: {
      method: "PUT",
      headers,
    },
  });
};
