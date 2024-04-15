import type { DataObject } from "../data/DataObject";

export type AppWebsocket = DataObject & {
  objectIds: string[];
};
