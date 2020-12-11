class UserSleep {
  constructor(sleepData) {
    this.sleepData = sleepData

  }

  // should we use filter?
  mapUserSleep(id) {
    return this.sleepData.filter((value) => value.userID === id)
  }

  getOneDayOfData(date, id, keyName) {
    return this.mapUserSleep(id).find((day) => day.date === date)[keyName]
  }

  calculateAvgHoursSlept(allHoursSlept, id) {
    let totalAvgHours = this.mapUserSleep(id)
      .map(totalHours => totalHours.hoursSlept)
      .reduce((avgHours, value) => {
        let totalHours = (avgHours += value);
        return totalHours;
      }, 0);
    return (totalAvgHours = totalAvgHours / allHoursSlept.sleepData.length);
  }

  calculateAvgSleepQual(allSleepQual, id) {
    let totalAvgSleepQual = this.mapUserSleep(id)
      .map(totalQuality => totalQuality.sleepQuality)
      .reduce((avgQuality, value) => {
        let totalQuality = (avgQuality += value);
        return totalQuality;
      }, 0);
    return (totalAvgSleepQual = totalAvgSleepQual / allSleepQual.sleepData.length);
  }

  calculateSleepItemPerWeek(startDate, id, keyName) {
    const sleepList = this.mapUserSleep(id);
    const findIndex = sleepList.findIndex(day => day.date === startDate);
    const sleepItemPerWeek = sleepList.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value[keyName]);
      } else {
        total.push(value[keyName]);
      }
      return total;
    }, []);
    return sleepItemPerWeek.splice([findIndex], 7);
  }

}



if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}