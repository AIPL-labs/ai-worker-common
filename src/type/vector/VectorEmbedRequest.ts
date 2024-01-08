export type VectorEmbedRequest = {
  model?: string; // a bit of future-proofing
  chunks: string | string[];
  document: string;
  namespace: string;
  metadata?: object;
  
  // @see FeatureExtractionPipelineOptions
  pooling?: "none" | "mean" | "cls";
  normalize?: boolean;
};
