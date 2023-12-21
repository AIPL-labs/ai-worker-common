import { DataIndex } from "../../type/data-index/DataIndex";
import { DataObject } from "../../type/data/DataObject";
import { DataIndexRecordPushRequest } from "../../type/rest/DataIndexRecordPushRequest";
import { getFetchState } from "../FetchState";
import { fetchWithJson } from "../fetchWithJson";


export const pushDataIndexRecord = async <T extends DataObject>(
  params: DataIndexRecordPushRequest<T>
): Promise<DataIndex<T> | undefined> => {
  const { homeBaseUrl } = getFetchState();
  const resp = await fetchWithJson(homeBaseUrl + `/data/index`, params, {
    method: "PUT",
  });
  if (!resp.ok) {
    console.error(resp);
    return undefined;
  }
  return resp.json();
};
