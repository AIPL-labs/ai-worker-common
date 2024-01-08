export type AppMessageMap = {
    auth: string;
};
export type AppMessage<T extends keyof AppMessageMap = keyof AppMessageMap> = {
    type: T;
    detail: AppMessageMap[T];
};
//# sourceMappingURL=AppMessage.d.ts.map