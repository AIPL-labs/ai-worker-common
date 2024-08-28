import type { DataPoint, RRDBConfig } from "./RRDBTypes";
export type RRDB = {
    data: {
        [key: string]: DataPoint[];
    };
    config: RRDBConfig;
};
export declare const createRRDB: (config?: RRDBConfig) => RRDB;
export declare const insertDataPoint: (rrdb: RRDB, dataPoint: DataPoint) => RRDB;
export declare const retrieveDataPoint: (rrdb: RRDB, timestamp: number, periodKey: keyof RRDBConfig["periods"]) => DataPoint | null;
export declare const Rrdbs: {
    retrieveDataPoint: (rrdb: RRDB, timestamp: number, periodKey: keyof RRDBConfig["periods"]) => DataPoint | null;
    insertDataPoint: (rrdb: RRDB, dataPoint: DataPoint) => RRDB;
    createRRDB: (config?: RRDBConfig) => RRDB;
};
//# sourceMappingURL=Rrdbs.d.ts.map