import type { AppObject, AppObjectType, AppObjectTypeMap } from "../type/app/AppObject";
export type AppObjectCreator<K extends AppObjectType> = (draft: Partial<AppObject<K>>) => AppObjectTypeMap[K];
export declare const createAppObject: <T extends AppObjectType = keyof AppObjectTypeMap>(type: T, draft?: Partial<AppObject<T>>) => AppObject<T>;
//# sourceMappingURL=createAppObject.d.ts.map