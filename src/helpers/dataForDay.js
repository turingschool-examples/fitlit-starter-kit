const dataForDay = (data, date, dataPointProperty) => {
  const daysData = data.find(dataPoint => dataPoint.date === date);
  if (!daysData) {
    return undefined
  } else {
    return daysData[dataPointProperty];
  }
}


if (typeof module !== "undefined") {
  module.exports = dataForDay;
}
