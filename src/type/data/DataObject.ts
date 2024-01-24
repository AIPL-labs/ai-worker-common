import { AccessInfo } from "../access/AccessInfo";
import { AppObjectType } from "../app/AppObject";

export type DataObject = {
  id: string;
};

export const isDataObject = (maybe: unknown): maybe is DataObject => {
  const straw = maybe as DataObject;
  return typeof straw === "object" && typeof straw.id === "string";
};

export type DataObjectMetadata = {
  accessInfo: AccessInfo;
};

export type DataLink = {
  parentId: string;
  childId: string;
  objectType: AppObjectType;
  key: string;
};
