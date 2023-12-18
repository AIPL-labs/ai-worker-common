import { AppObject, AppObjectType } from "../../type/app/AppObject";
import { getFetchState } from "fetch/FetchState";
import { fetchWithJson } from "../fetchWithJson";

export const createBackendDataObject = async <T extends AppObjectType>(
  type: T,
  draft: Partial<AppObject<T>>
) => {
  const { homeBaseUrl } = getFetchState();
  return await fetchWithJson<Partial<AppObject<T>>>(
    homeBaseUrl + `/data/create/${type}`,
    draft
  );
};
