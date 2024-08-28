import stableStringify from "json-stable-stringify";
export const keyToQueryObject = (swrKey) => {
    return JSON.parse(swrKey);
};
export const swrQueryObjectToKey = (sqo) => {
    return stableStringify(sqo);
};
export const SwrKeys = {
    keyToQueryObject,
    swrQueryObjectToKey,
};
//# sourceMappingURL=SwrKeys.js.map