import { AppObject } from "../app/AppObject";

export type DataIndex<T extends object = object> = {
  id: string;
  records: Record<string, T>;
};
