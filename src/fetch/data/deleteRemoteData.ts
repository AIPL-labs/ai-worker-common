import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../fetchWithAuth";
import type { HomeAuth } from "./HomeAuth";

export const deleteRemoteData = async ({
  id,
  homeBaseUrl = "",
  authToken,
}: Partial<HomeAuth> & { id: string }) => {
  assertValue(id);
  return fetchWithAuth({
    authToken,
    url: homeBaseUrl + `/data/${id}`,
    options: {
      method: "DELETE",
    },
  });
};
