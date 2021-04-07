const dataForDay = (data, date) => {
  const daysData = this.data.find(dataPoint => dataPoint.date === date);
  if (daysData !== undefined) {
    return daysData.numOunces;
  } else {
    return undefined
  }
}


if (typeof module !== "undefined") {
  module.exports = calcByDate;
}
