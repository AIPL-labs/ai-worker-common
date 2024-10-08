import { assertValue } from "@mjtdev/engine";
import type { AccessInfo } from "../../type/access/AccessInfo";
import { fetchWithJson } from "../fetchWithJson";
import type { HomeAuth } from "./HomeAuth";

export const putRemoteDataAccess = async ({
  authToken,
  homeBaseUrl = "",
  accessInfo,
  id,
}: Partial<HomeAuth> & {
  id: string;
  accessInfo: AccessInfo;
}) => {
  assertValue(id);
  return await fetchWithJson({
    authToken,
    url: homeBaseUrl + `/data/access/${id}`,
    data: accessInfo,
    options: {
      method: "PUT",
    },
  });
};
