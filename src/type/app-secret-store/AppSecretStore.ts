import type { DataObject } from "../data/DataObject";

export type AppSecretStore = DataObject &
  Partial<{
    name: string;
    records: Record<string, string>;
  }>;
