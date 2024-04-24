import type { DataPoint, RRDBConfig } from "./RRDBTypes";
import { createPeriod, insertData, getData } from "./TimePeriods";

export type RRDB = {
  data: { [key: string]: DataPoint[] };
  config: RRDBConfig;
};

const defaultConfig: RRDBConfig = {
  periods: {
    second: { size: 60, interval: 1 }, // 60 seconds
    minute: { size: 60, interval: 60 }, // 60 minutes
    hour: { size: 24, interval: 3600 }, // 24 hours
    day: { size: 7, interval: 86400 }, // 7 days
    week: { size: 4, interval: 604800 }, // 4 weeks
    month: { size: 12, interval: 2592000 }, // 12 months
    year: { size: 10, interval: 31536000 }, // 10 years
  },
};

export const createRRDB = (config: RRDBConfig = defaultConfig): RRDB => {
  const data = {
    second: createPeriod(config.periods.second),
    minute: createPeriod(config.periods.minute),
    hour: createPeriod(config.periods.hour),
    day: createPeriod(config.periods.day),
    week: createPeriod(config.periods.week),
    month: createPeriod(config.periods.month),
    year: createPeriod(config.periods.year),
  };

  return { data, config };
};

export const insertDataPoint = (rrdb: RRDB, dataPoint: DataPoint): RRDB => {
  const newData = Object.keys(rrdb.config.periods).reduce(
    (acc, periodKey) => {
      const periodConfig =
        rrdb.config.periods[periodKey as keyof RRDBConfig["periods"]];
      const updatedData = insertData(
        rrdb.data[periodKey],
        dataPoint,
        periodConfig
      );
      acc[periodKey] = updatedData;
      return acc;
    },
    { ...rrdb.data }
  );

  return { ...rrdb, data: newData };
};

export const retrieveDataPoint = (
  rrdb: RRDB,
  timestamp: number,
  periodKey: keyof RRDBConfig["periods"]
): DataPoint | null => {
  const periodConfig = rrdb.config.periods[periodKey];
  return getData(rrdb.data[periodKey], timestamp, periodConfig);
};

export const Rrdbs = {
  retrieveDataPoint,
  insertDataPoint,
  createRRDB,
};
