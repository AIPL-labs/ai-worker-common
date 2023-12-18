import { fetchWithJson } from "../../fetch/fetchWithJson";
import { DataObject } from "../../type/data/DataObject";
import { getFetchState } from "../FetchState";

export const putBackendDataObjects = async (dataObjects: DataObject[]) => {
  const { homeBaseUrl } = getFetchState();
  return fetchWithJson<DataObject[]>(homeBaseUrl + `/data`, dataObjects, {
    method: "PUT",
  });
};
