import { createState } from "@mjtdev/engine";


export const [useFetchState, updateFetchState, getFetchState] = createState({
  homeBaseUrl: undefined as string | undefined,
});
