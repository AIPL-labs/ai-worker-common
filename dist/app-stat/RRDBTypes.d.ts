export type TimePeriodConfig = {
    size: number;
    interval: number;
};
export type RRDBConfig = {
    periods: {
        second: TimePeriodConfig;
        minute: TimePeriodConfig;
        hour: TimePeriodConfig;
        day: TimePeriodConfig;
        week: TimePeriodConfig;
        month: TimePeriodConfig;
        year: TimePeriodConfig;
    };
};
export type DataPoint = {
    timestamp: number;
    value: number;
};
//# sourceMappingURL=RRDBTypes.d.ts.map