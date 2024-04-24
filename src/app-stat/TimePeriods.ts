import type { TimePeriodConfig, DataPoint } from "./RRDBTypes";

export const createPeriod = (config: TimePeriodConfig): DataPoint[] =>
  new Array(config.size).fill(null);

export const insertData = (
  data: DataPoint[],
  dataPoint: DataPoint,
  config: TimePeriodConfig
): DataPoint[] => {
  const index = calculateIndex(dataPoint.timestamp, config);
  const newData = [...data];
  newData[index] = dataPoint;
  return newData;
};

export const calculateIndex = (
  timestamp: number,
  config: TimePeriodConfig
): number => Math.floor(timestamp / (config.interval * 1000)) % config.size;

export const getData = (
  data: DataPoint[],
  timestamp: number,
  config: TimePeriodConfig
): DataPoint | null => {
  const index = calculateIndex(timestamp, config);
  return data[index];
};

export const TimePeriods = {
  createPeriod,
  insertData,
  calculateIndex,
  getData,
};
