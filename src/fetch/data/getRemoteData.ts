import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../fetchWithAuth";
import type { HomeAuth } from "./HomeAuth";

export const getRemoteData = async ({
  id,
  homeBaseUrl = "",
  authToken,
}: Partial<HomeAuth> & { id: string }) => {
  assertValue(id);
  return fetchWithAuth({ url: homeBaseUrl + `/data/${id}`, authToken });
};
