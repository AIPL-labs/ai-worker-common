import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../fetchWithJson";
import type { HomeAuth } from "./HomeAuth";

export const getRemoteDataAccess = async ({
  authToken,
  homeBaseUrl = "",
  id,
}: Partial<HomeAuth> & {
  id: string;
}) => {
  assertValue(id);
  return await fetchWithJson({
    authToken,
    url: homeBaseUrl + `/data/access/${id}`,
    options: {
      method: "GET",
    },
  });
};
