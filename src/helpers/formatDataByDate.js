const formatDataByDate = (data, property) => {
  const specificWeekData = data.map(dataPoint => {
      const day = dataPoint.date;
      const data = dataPoint[property];
      const newData = {[day]: data};
      return newData
  });
  return specificWeekData
}

if (typeof module !== "undefined") {
  module.exports = formatDataByDate;
}
