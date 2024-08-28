export type VectorBaseMetadata = {
    chunk: number;
    text: string;
};
export type VectorSearchResultItem = {
    id: string;
    document: string;
    metadata: VectorBaseMetadata & object;
};
//# sourceMappingURL=VectorSearchResultItem.d.ts.map