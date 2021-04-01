class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }

  calcAvgHoursSlept() {
    const totalHoursSlept = this.sleepData.reduce((total, num) => {
      return total + num.hoursSlept
    }, 0)
    const avgHoursSlept = totalHoursSlept / this.sleepData.length
    return avgHoursSlept
  }

  calcHoursSleptByDate() {

  }

  calcSleepQualityOnDate() {

  }

  calcHoursSleptOverWeek() {

  }

  calcSleepQualityOverWeek() {

  }
}


if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
