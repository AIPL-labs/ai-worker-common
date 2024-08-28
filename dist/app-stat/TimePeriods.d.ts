import type { TimePeriodConfig, DataPoint } from "./RRDBTypes";
export declare const createPeriod: (config: TimePeriodConfig) => DataPoint[];
export declare const insertData: (data: DataPoint[], dataPoint: DataPoint, config: TimePeriodConfig) => DataPoint[];
export declare const calculateIndex: (timestamp: number, config: TimePeriodConfig) => number;
export declare const getData: (data: DataPoint[], timestamp: number, config: TimePeriodConfig) => DataPoint | null;
export declare const TimePeriods: {
    createPeriod: (config: TimePeriodConfig) => DataPoint[];
    insertData: (data: DataPoint[], dataPoint: DataPoint, config: TimePeriodConfig) => DataPoint[];
    calculateIndex: (timestamp: number, config: TimePeriodConfig) => number;
    getData: (data: DataPoint[], timestamp: number, config: TimePeriodConfig) => DataPoint | null;
};
//# sourceMappingURL=TimePeriods.d.ts.map