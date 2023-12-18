import { assertValue } from "@mjtdev/engine";
import { fetchWithJson } from "../../fetch/fetchWithJson";
import { DataObject } from "../../type/data/DataObject";
import { getFetchState } from "../FetchState";

export const putBackendDataObject = async (data: DataObject) => {
  const { id } = data;
  assertValue(id);
  const { homeBaseUrl } = getFetchState();
  return await fetchWithJson(homeBaseUrl + `/data/${id}`, data, {
    method: "PUT",
  });
};
