export type FetchRetryOptions = Partial<{
    maxRetries: number;
    retryCondition: (value: Response | Error) => boolean | Promise<boolean>;
}>;
//# sourceMappingURL=FetchRetryOptions.d.ts.map