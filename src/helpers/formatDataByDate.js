const formatDataByDate = (data, property) => {
  const specificWeekData = data.map(dataPoint => {
      const day = dataPoint.date;
      const data = dataPoint[property];
      const newData = {[day]: data};
      return newData
  });
  return specificWeekData
}

module.exports = formatDataByDate;
