import { AppObjectType, AppObject, AppObjectTypeMap } from "../type/app/AppObject";
export type AppObjectCreator<K extends AppObjectType> = (draft: Partial<AppObject<K>>) => AppObjectTypeMap[K];
export declare const createAppObject: <T extends keyof AppObjectTypeMap = keyof AppObjectTypeMap>(type: T, draft?: Partial<AppObject<T>>) => AppObject<T> | undefined;
//# sourceMappingURL=createAppObject.d.ts.map