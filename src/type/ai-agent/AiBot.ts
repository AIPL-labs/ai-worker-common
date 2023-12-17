export type AiAgent = {
  id: string;
  name: string;
  chatIds: string[];
  vectorStoreIds?: string[];
  aiCharacterId?: string;
  userCharacterId?: string;
};
