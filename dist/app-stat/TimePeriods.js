export const createPeriod = (config) => new Array(config.size).fill(null);
export const insertData = (data, dataPoint, config) => {
    const index = calculateIndex(dataPoint.timestamp, config);
    const newData = [...data];
    newData[index] = dataPoint;
    return newData;
};
export const calculateIndex = (timestamp, config) => Math.floor(timestamp / (config.interval * 1000)) % config.size;
export const getData = (data, timestamp, config) => {
    const index = calculateIndex(timestamp, config);
    return data[index];
};
export const TimePeriods = {
    createPeriod,
    insertData,
    calculateIndex,
    getData,
};
//# sourceMappingURL=TimePeriods.js.map