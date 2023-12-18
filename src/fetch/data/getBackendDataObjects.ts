import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../../fetch/fetchWithJson";
import { getFetchState } from "../FetchState";

export const getBackendDataObjects = async (ids: string[]) => {
  assertValue(ids);

  const { homeBaseUrl } = getFetchState();
  return fetchWithJson(homeBaseUrl + `/data`, ids);
};
