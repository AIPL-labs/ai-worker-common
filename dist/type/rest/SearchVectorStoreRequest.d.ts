export type SearchVectorStoreRequest = {
    namespace: string;
    query: string;
    topK: number;
};
export type VectorMetadata = {
    dataId: string;
    chunk: number;
    text: string;
};
export type VectorMatch = VectorMetadata & {
    score: number;
};
export type SearchVectorStoreResult = {
    request: SearchVectorStoreRequest;
    matches: VectorMatch[];
};
//# sourceMappingURL=SearchVectorStoreRequest.d.ts.map