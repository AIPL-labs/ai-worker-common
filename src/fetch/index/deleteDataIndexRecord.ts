// import { DataIndex } from "../../type/data-index/DataIndex";
// import { DataObject } from "../../type/data/DataObject";
// import { DataIndexRecordDeleteRequest } from "../../type/rest/DataIndexRecordDeleteRequest";
// import { getFetchState } from "../FetchState";
// import { fetchWithJson } from "../fetchWithJson";


// export const deleteDataIndexRecord = async <T extends DataObject>(
//   params: DataIndexRecordDeleteRequest
// ): Promise<DataIndex<T> | undefined> => {
//   const { homeBaseUrl } = getFetchState();
//   const resp = await fetchWithJson(homeBaseUrl + `/data/index`, params, {
//     method: "DELETE",
//   });
//   if (!resp.ok) {
//     console.error(resp);
//     return undefined;
//   }
//   return resp.json();
// };
