import type { DataObject } from "../data/DataObject";

export type AccessPointTheme = DataObject &
  Partial<{
    name: string;
    logoDataId: string;
    backgroundColor: string;
    color: string;
    bannerText: string;
    bannerUrl: string;
  }>;
