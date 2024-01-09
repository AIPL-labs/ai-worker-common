import { AccessInfo } from "../../access/AccessInfo";
import { AppObjectType } from "../app/AppObject";
export type DataObject = {
    id: string;
};
export declare const isDataObject: (maybe: unknown) => maybe is DataObject;
export type DataObjectMetadata = {
    accessInfo: AccessInfo;
};
export type DataLink = {
    parentId: string;
    childId: string;
    objectType: AppObjectType;
    key: string;
};
//# sourceMappingURL=DataObject.d.ts.map