import { createState } from "@mjtdev/engine";
export const [useDataIndexesState, updateDataIndexesState, getDataIndexesState,] = createState({
    indexes: {},
});
export const DataIndexDB = {
    dbName: "ai-thing",
    storeName: "data-index",
};
export const loadDataIndexesState = async (key = "state") => {
    throw new Error("TBD?");
    // const state = await Idbs.get(DataIndexDB, key, () => ({ indexes: {} }));
    // return Apps.waitFor(() => updateDataIndexesState(() => state), {
    //   message: "loading data indexes",
    // });
};
export const storeDataIndexesState = (key = "state") => {
    console.log("ignoring storeDataIndexesState");
    // const state = getDataIndexesState();
    // return Apps.waitFor(() => Idbs.put(DataIndexDB, key, state), {
    //   message: "storing data indexes",
    // });
};
//# sourceMappingURL=DataIndexesState.js.map