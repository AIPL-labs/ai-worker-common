export type TimePeriodConfig = {
  size: number;  // Total number of slots for the time period
  interval: number;  // Interval in seconds that each slot represents
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
