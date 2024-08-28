export type VectorEmbedRequest = {
    model?: string;
    chunks: string | string[];
    document: string;
    namespace: string;
    metadata?: object;
    pooling?: "none" | "mean" | "cls";
    normalize?: boolean;
};
//# sourceMappingURL=VectorEmbedRequest.d.ts.map