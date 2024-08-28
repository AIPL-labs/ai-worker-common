import type { AppObjectType } from "../type/app/AppObject";
export type SwrQueryObject = Partial<{
    ids: string[];
    key: string;
    nonce: string;
    parentId: string;
    objectType: AppObjectType;
}>;
export declare const keyToQueryObject: (swrKey: string) => SwrQueryObject;
export declare const swrQueryObjectToKey: (sqo: SwrQueryObject) => string;
export declare const SwrKeys: {
    keyToQueryObject: (swrKey: string) => SwrQueryObject;
    swrQueryObjectToKey: (sqo: SwrQueryObject) => string;
};
//# sourceMappingURL=SwrKeys.d.ts.map