// if (typeof module !== 'undefined') {
  const calcAverage = require("./helpers/calcAverage");
  const formatDataByDate = require("./helpers/formatDataByDate");
  const retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");
// }

class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }

  mostRecentDayData() {
    return this.sleepData[this.sleepData.length - 1];
  }

  calcAvgSleep(property) {
    const avg = calcAverage(this.sleepData, property);
    return avg
  }

  calcByDate(date, property) {
    const sleepDate = this.sleepData.find(dataPoint => dataPoint.date === date);
    return sleepDate[property]
  }

  calcOverWeek(date, property) {
    const sleepData = retrieveAllUserDataByWeek(this.sleepData, date);
    const formattedData = formatDataByDate(sleepData, property);
    return formattedData
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
