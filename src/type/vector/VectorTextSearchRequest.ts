export type VectorTextSearchRequest = {
  text: string;
  namespace: string;
  model?: string;
  topK?: number;
};
