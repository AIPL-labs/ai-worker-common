import { assertValue } from "@mjtdev/engine";
import { fetchWithAuth } from "../../fetch/fetchWithAuth";
import { getFetchState } from "../FetchState";

export const getBackendData = async (id: string) => {
  assertValue(id);
  const { homeBaseUrl } = getFetchState();
  return fetchWithAuth(homeBaseUrl + `/data/${id}`);
};
