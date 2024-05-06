import { assertValue } from "@mjtdev/engine";
import type { HttpHeaderMap } from "../HttpHeaderMap";
import { fetchWithAuth } from "../fetchWithAuth";
import type { HomeAuth } from "./HomeAuth";


export const putRemoteDataAccess = async ({
  authToken, homeBaseUrl = "", data, id, options = {},
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
