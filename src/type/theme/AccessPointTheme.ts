import type { DataObject } from "../data/DataObject";

export type AccessPointTheme = DataObject & {
  name?: string;
  logoDataId?: string;
  backgroundColor?: string;
  color?: string;
};
