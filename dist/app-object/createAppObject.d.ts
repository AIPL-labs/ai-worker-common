import { AppObjectType, AppObject, AppObjectTypeMapping } from "../type/app/AppObject";
export type AppObjectCreator<K extends AppObjectType> = (draft: Partial<AppObject<K>>) => AppObjectTypeMapping[K];
export declare const createAppObject: <T extends keyof AppObjectTypeMapping = keyof AppObjectTypeMapping>(type: T, draft?: Partial<AppObject<T>>) => AppObject<T> | undefined;
//# sourceMappingURL=createAppObject.d.ts.map